import { winnerChoice } from "./index.js";

describe("Winner Choice", () => {
  it("should return a correct winner", () => {
    let paperWinner = winnerChoice("rock", "paper");
    chai.expect(paperWinner).to.equal("paper");
    let rockWinner = winnerChoice("rock", "scissors");
    chai.expect(rockWinner).to.equal("rock");
    let scissorsWinner = winnerChoice("paper", "scissors");
    chai.expect(scissorsWinner).to.equal("scissors");
  });
});
