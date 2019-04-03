import React, { PureComponent } from 'react';
import TextContainer from '../../shared/TextContainer';
import TextSpan from '../TransactionBuilder/TextSpan';
import InputContainerLarge from '../../shared/InputContainerLarge';

class TransactionSigner extends PureComponent {
  render() {
    return (
      <div>
        <TextContainer height="true">
          The transaction signer lets you add signatures to a Stellar
          transaction. Signatures are used in the network to prove that the
          account is authorized to perform the operations in the transaction.
          For simple transactions, you only need one signature from the correct
          account. Some advanced signatures may require more than one signature
          if there are multiple source accounts or signing keys. Read more about
          signatures on the developer's site.
        </TextContainer>

        <div className="text-left d-flex flex-column mt-5 container">
          <TextSpan className="my-5">
            Import a transaction in XDR Format:
          </TextSpan>
          <InputContainerLarge height="150px" className="mb-5" />
          <button type="button" className="btn btn-primary col-md-2">
            Import Transaction
          </button>
        </div>
      </div>
    );
  }
}

export default TransactionSigner;
