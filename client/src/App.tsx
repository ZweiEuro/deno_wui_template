

/* // sending events

import { sendEvent } from '@wui/web-user-interface-node/hooks';

// send the event
sendEvent('exampleEvent', { value: 12345 });

*/

/* receiving events

import { registerEventListener, useEventListener } from '@wui/web-user-interface-node/hooks';


// Subscribe to the event
// without a type it will be "unknown"
type ExampleType = {
    value:number
};


const listener = (payload: ExampleType) {
    console.log("received event payload",payload)
}

// we get a unique symbol that identifies the callback
const callbackSymbol = registerEventListener<ExampleType>("exampleEvent",listener);

// When done, cleanup with
// realistically this is almost never needed unless you are dynamically adding and removing components (or moving between pages)
unregisterEventListener("exampleEvent", callbackSymbol);





*/

const Application: React.FC = () => {

  /* // listeners can also be used directly inside react components:
  // Cleanup not necessary, the hook will do it for you
  const data = useEventListener<ExampleType>('exampleEvent');
  
  return <> {JSON.stringify(data)} </>; // this will just display the data as a string in your website
  */

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        fontSize: '1.5em',
      }}
    >
      <p>
        Welcome to the WUI / Deno template!
      </p>

      <p>
        There are two main ways to send data to and from the server, those are documented here: 
        <br/>
        https://wui.pages.zweieuro.at/core/web-user-interface-docs/docs/usage/node#sending-events
      </p>

      <p>
        The example code is also pasted in comment blocks in the code.
      </p>

    </div >
  );
};

export default Application;
