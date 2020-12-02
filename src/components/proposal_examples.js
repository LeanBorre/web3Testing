const standardShareRequest = 1;
const standardLootRequest = 10;
const standardTribute = _1e18;

const proposal1 = {
  applicant: applicant1,
  sharesRequested: standardShareRequest,
  lootRequested: standardLootRequest,
  tributeOffered: standardTribute,
  tributeToken: tokenAlpha.address,
  paymentRequested: 0,
  paymentToken: tokenAlpha.address,
  details: "all hail moloch ALPHA",
};

const proposal2 = {
  applicant: applicant2,
  sharesRequested: standardShareRequest,
  lootRequested: standardLootRequest,
  tributeOffered: standardTribute,
  tributeToken: tokenBeta.address,
  paymentRequested: 0,
  paymentToken: tokenBeta.address,
  details: "all hail moloch BETA",
};

const proposal3 = {
  applicant: applicant2,
  sharesRequested: 0,
  lootRequested: 0,
  tributeOffered: 0,
  tributeToken: tokenAlpha.address,
  paymentRequested: 10,
  paymentToken: tokenBeta.address,
  details: "all hail moloch ALPHA tribute BETA payment",
};

const proposal1 = {
  applicant: "applicant1",
  tokenTribute: 100,
  sharesRequested: 1,
  details: "all hail moloch",
};

/* const { artifacts } = require("@nomiclabs/buidler");
const Token = artifacts.require("./Token");
const deploymentConfig = {
  PERIOD_DURATION_IN_SECONDS: 17280,
  VOTING_DURATON_IN_PERIODS: 35,
  GRACE_DURATON_IN_PERIODS: 35,
  PROPOSAL_DEPOSIT: 10,
  DILUTION_BOUND: 3,
  PROCESSING_REWARD: 1,
  TOKEN_SUPPLY: 10000,
};
let tokenAlpha = Token.new(deploymentConfig.TOKEN_SUPPLY); */
