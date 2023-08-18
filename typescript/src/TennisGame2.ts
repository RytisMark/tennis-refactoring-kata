import { TennisGame } from "./TennisGame";

const scoreArr = ["Love", "Fifteen", "Thirty", "Forty", "Deuce", "Advantage"];

class Player {
	constructor(name: string, points: number = 0, result: string = "") {
		this.name = name;
		this.points = points;
		this.result = result;
	}
	name = "";
	points = 0;
	result = "";
}

export class TennisGame2 implements TennisGame {
	constructor(player1Name: string, player2Name: string) {
		this.player1 = new Player(player1Name);
		this.player2 = new Player(player2Name);
		this.player1Name = player1Name;
		this.player2Name = player2Name;
	}

	player1: Player;
	player2: Player;

	player1Points = 0;
	player2Points = 0;

	player1Result = "";
	player2Result = "";

	private player1Name: string;
	private player2Name: string;

	getScore(): string {
		let score = "";
		this.player1Result = scoreArr[this.player1Points];
		this.player2Result = scoreArr[this.player2Points];

		const winner = this.player1Points >= this.player2Points ? this.player1 : this.player2;
		const loser = winner.name === this.player1Name ? this.player2 : this.player1;

		if (winner.points === loser.points) {
			if (this.player1Points >= 3) {
				score = "Deuce";
			} else if (this.player1Points < 4) {
				score = scoreArr[this.player1Points] + "-All";
			}
		}

		if (this.player2Points > 0 && this.player1Points === 0) {
			score = this.player1Result + "-" + this.player2Result;
		}

		// if(winner.points > loser.points){
		//   if(winner.points < 4){
		// 		score = this.player1Result + "-" + this.player2Result;
		//   }
		// }

		if (this.player1Points > this.player2Points) {
			if (this.player1Points < 4) {
				score = this.player1Result + "-" + this.player2Result;
			}
			if (this.player2Points >= 3) {
				score = "Advantage player1";
			}
		} else if (this.player2Points > this.player1Points) {
			if (this.player2Points < 4) {
				score = this.player1Result + "-" + this.player2Result;
			}
			if (this.player1Points >= 3) {
				score = "Advantage player2";
			}
		}

		if (this.player1Points >= 4 && this.player2Points >= 0 && this.player1Points - this.player2Points >= 2) {
			score = "Win for player1";
		}
		if (this.player2Points >= 4 && this.player1Points >= 0 && this.player2Points - this.player1Points >= 2) {
			score = "Win for player2";
		}
		return score;
	}

	SetP1Score(score: number): void {
		for (let i = 0; i < score; i++) {
			this.P1Score();
		}
	}

	SetP2Score(score: number): void {
		for (let i = 0; i < score; i++) {
			this.P2Score();
		}
	}

	P1Score(): void {
		this.player1Points++;
		this.player1.points++;
	}

	P2Score(): void {
		this.player2Points++;
		this.player2.points++;
	}

	wonPoint(player: string): void {
		if (player === "player1") this.P1Score();
		else this.P2Score();
	}
}
