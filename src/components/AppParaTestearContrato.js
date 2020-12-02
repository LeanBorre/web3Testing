import React, { Component } from "react";
import logo from "../logo.png";
import "./App.css";

import MolochV1ABI from "../contracts/Molochv1";
import MolochV2ABI from "../contracts/Molochv2";

import { Flex, Box, Form, Input, Field, Button } from "rimble-ui";

const Web3 = require("web3");
const web3 = new Web3("ws://localhost:8545");

const ramdomAddress1 = "0x1db3439a222c519ab44bb1144fc28167b4fa6ee6"; // Vitalik Buterin  //  1000 Shares
const ramdomAddress2 = "0x6eAD593354D2C482D6B03253D675D1272892f524"; // La que nos regala el FORK

const wethHolder = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; //  wethHolder

// Address del Smart Contract:
const molochContractAddress = "0x1fd169a4f5c59acf79d0fd5d91d1201ef1bce9f1";

const contract = new web3.eth.Contract(MolochV2ABI, molochContractAddress);

// set provider for all later instances to use
contract.setProvider("ws://localhost:8545");

//////////////////////////// BOILERPLATE PARA SUBMITPROPOSAL ////////////////////////////
const sharesHolder1 = "0x1db3439a222c519ab44bb1144fc28167b4fa6ee6"; //  Vitalik Buterin  //  1000 Shares
const sharesHolder2 = "0x2586e4b30c581ee20af694495dbcf98daecde75e"; // 500 Shares
const sharesHolder3 = "0x512e07a093aaa20ba288392eadf03838c7a4e522"; //  el que posteo 'can aragon plz stop being douchebags'

const _1e18 = new web3.utils.BN("1000000000000000000"); // 1e18

const standardShareRequest = 1;
const standardLootRequest = 10;
const standardTribute = _1e18;

const applicant = "0x1db3439a222c519ab44bb1144fc28167b4fa6ee6"; //  Cuenta de Vitalik Buterin  //  1000 Shares
const sharesRequested = 1; //  standardShareRequest; //  con 0 deberia pasar
const lootRequested = 10; //  standardLootRequest; //  con 0 deberia pasar
const tributeOffered = new web3.utils.BN("1000000000000000000"); //  standardTribute; //  con 0 deberia pasar
const tributeToken = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // (Token: Wrapped Ether (WETH))
const paymentRequested = 0; //  con 0 deberia pasar
const paymentToken = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // (Token: Wrapped Ether (WETH))
const details = {
  from: "0x1db3439a222c519ab44bb1144fc28167b4fa6ee6",
  msj: "submitProposalTest",
};
//////////////////////////// BOILERPBOILERPLATE PARA SUBMITPROPOSAL ////////////////////////////

//  SUBMITPROPOSAL:
const funcionMagica = contract.methods.submitProposal(
  applicant,
  sharesRequested,
  lootRequested,
  tributeOffered,
  tributeToken,
  paymentRequested,
  paymentToken,
  details
);

web3.eth.getBalance(tributeToken).then(console.log);

console.log("FUNCION MAGICA: ", funcionMagica);

funcionMagica
  //.call(console.log); //  SIEMPRE ME DEVUELVE 'onlyDelegate - not a delegate'
  .send({
    from: "0x1db3439a222c519ab44bb1144fc28167b4fa6ee6",
  })
  .on("transactionHash", function(hash) {
    console.log(hash);
  })
  .on("receipt", function(receipt) {
    console.log(receipt);
  })
  .on("confirmation", function(confirmationNumber, receipt) {
    console.log(confirmationNumber);
    console.log(receipt);
  })
  .on("error", function(error, receipt) {
    console.log(error); //  Moloch::onlyDelegate - not a delegate ||  sender account not recognized
    //console.log(receipt);
  });

const handleInput = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted valid form");
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ramdomBalance1: 0,
      gasPrice: 0,
      block: 0,
      ramdomBalance2: 0,
    };
  }

  mandarEth = async (event) => {
    event.preventDefault();
    console.log("HACIENDO LA TRANSFERENCIA");

    web3.eth.sendTransaction(
      {
        from: ramdomAddress1,
        to: ramdomAddress2,
        value: web3.utils.toWei("1", "ether"),
      },
      (error, hash) => {
        console.log("HASH: ", hash);
      }
    );
  };

  async componentDidMount() {
    web3.eth.getBalance(ramdomAddress1, (err, bal) => {
      const ramdomBalance1 = web3.utils.fromWei(bal, "ether");
      this.setState({ ramdomBalance1: ramdomBalance1 });
    });

    web3.eth
      .getGasPrice()
      .then((price) => this.setState({ gasPrice: web3.utils.fromWei(price, "gwei") }));

    web3.eth.getBlockNumber().then((block) => this.setState({ block }));

    web3.eth.getBalance(ramdomAddress2, (err, bal) => {
      const ramdomBalance2 = web3.utils.fromWei(bal, "ether");
      this.setState({ ramdomBalance2: ramdomBalance2 });
    });
  }

  render() {
    console.log("WEB3: ", web3);
    console.log("MOLOCH CONTRACT: ", contract);
    console.log("THIS.STATE ANTES DE RENDERIZAR: ", this.state);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Ramdom Address 1: {ramdomAddress1}</div>
          <div>Tiene esta cantidad de Ether: {this.state.ramdomBalance1}</div>
          <div>GasPrice en Gwei: {this.state.gasPrice}</div>
          <div>Bloque: {this.state.block}</div>
          <button onClick={this.mandarEth}>Click para mandar ether</button>
          <div>Ramdom Address 2: {ramdomAddress2}</div>
          <div>Tiene esta cantidad de Ether: {this.state.ramdomBalance2}</div>
          <Box p={4}>
            <Box>
              <Form onSubmit={handleSubmit}>
                <Flex flexWrap={"wrap"}>
                  <Box>
                    <Field label="Titulo:">
                      <Input
                        onChange={handleInput}
                        type="text"
                        required={true}
                        placeholder="a completar"
                      />
                    </Field>
                    <Field label="Descripción:">
                      <Input
                        onChange={handleInput}
                        type="text"
                        required={true}
                        placeholder="a completar"
                      />
                    </Field>
                    <Field label="Link:">
                      <Input
                        onChange={handleInput}
                        type="text"
                        required={true}
                        placeholder="a completar"
                      />
                    </Field>
                    <Field label="Tributo:">
                      <Input
                        onChange={handleInput}
                        type="text"
                        required={true}
                        placeholder="a completar"
                      />
                    </Field>
                    <Field label="Solicitud de Pago:">
                      <Input
                        onChange={handleInput}
                        type="text"
                        required={true}
                        placeholder="a completar"
                      />
                    </Field>
                    <Field label="Dirección de aplicante:">
                      <Input
                        onChange={handleInput}
                        type="text"
                        required={true}
                        placeholder="a completar"
                      />
                    </Field>
                    <Field label="Campo 7:">
                      <Input
                        onChange={handleInput}
                        type="text"
                        required={true}
                        placeholder="a completar"
                      />
                    </Field>
                    <Field label="Campo 8:">
                      <Input
                        onChange={handleInput}
                        type="text"
                        required={true}
                        placeholder="a completar"
                      />
                    </Field>
                  </Box>
                </Flex>
                <Box>
                  <Button type="submit">Submit Form</Button>
                </Box>
              </Form>
            </Box>
          </Box>
        </header>
      </div>
    );
  }
}

export default App;

//  MAINNET FORK:

//  INFURA: https://mainnet.infura.io/v3/69439687240f415798ba5c5c167e12ad
//  NODE ALTER: https://eth.connect.bloq.cloud/v1/praise-deposit-stock
//  CONTRATO MOLOCH: --unlock "0x1fd169A4f5c59ACf79d0Fd5d91D1201EF1Bce9f1"
//  Vitalik Buterin - 1000 Shares // --unlock "0x1db3439a222c519ab44bb1144fc28167b4fa6ee6"
//  Token: Wrapped Ether (WETH): --unlock "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
//  wethHolder: --unlock "0x2f0b23f53734252bda2277357e97e1517d6b042a"

//  ganache-cli --fork https://mainnet.infura.io/v3/69439687240f415798ba5c5c167e12ad --unlock "0x1db3439a222c519ab44bb1144fc28167b4fa6ee6" --unlock "0x1fd169A4f5c59ACf79d0Fd5d91D1201EF1Bce9f1" --unlock "0x2f0b23f53734252bda2277357e97e1517d6b042a"
