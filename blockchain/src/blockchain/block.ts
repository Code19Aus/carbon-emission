import SHA256 from "crypto-js/sha256";
import { DIFFICULTY } from "./config";

class Block {
  timestamp: any;
  lastHash: any;
  hash: any;
  data: any;
  nonce: any;
  difficulty: any;

  constructor(timestamp: any, lastHash: any, hash: any, data: any, nonce: any, difficulty: any) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty || DIFFICULTY;
  }

  toString() {
    return `Block -
      Timestamp : ${this.timestamp}
      Last Hash : ${this.lastHash.substring(0, 10)}
      Hash      : ${this.hash.substring(0, 10)}
      Nonce     : ${this.nonce}
      Difficulty: ${this.difficulty}
      Data      : ${this.data}`;
  }

  static genesis() {
    return new this(
      Date.now(),
      "empty",
      "b2bbb5380731008719b8e548e2d1f31382ab94a4",
      undefined,
      0,
      DIFFICULTY
    );
  }

  // create new block
  static mineBlock(lastBlockHash: any, data: any) {
    const timestamp = Date.now();
    const lastHash = lastBlockHash;
    let nonce = 0;
    const hash = Block.hash(timestamp, lastHash, data, nonce, DIFFICULTY);
    return new this(timestamp, lastHash, hash, data, nonce, DIFFICULTY);
  }

  static hash(timestamp: any, lastHash: any, data: any, nonce: any, difficulty: any) {
    return SHA256(
      `${timestamp}${lastHash}${data}${nonce}${difficulty}`
    ).toString();
  }
  //  return SHA256(`${timestamp}${lastHash}${data}`).toString();

  static blockHash(block: any) {
    const { timestamp, lastHash, data, nonce, difficulty } = block;
    return Block.hash(timestamp, lastHash, data, nonce, difficulty);
  }
}

export default Block;
