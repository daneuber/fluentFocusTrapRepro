
import './App.css';

import { 
  DefaultButton, 
  PrimaryButton, 
  Dialog} from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';

function App() {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

  const modalProps = {
    titleAriaId: 'myLabelId',
    subtitleAriaId: 'mySubTextId',
    isBlocking: false,
    styles: { main: { maxWidth: 850 } },
  };

  return (
    <div className="App">
      <div className='headerbtns'>
          <DefaultButton text="outer button 1"/>
          <DefaultButton text="outer button 2"/>
          <DefaultButton text="outer button 3"/>
          <DefaultButton text="outer button 4"/>
          <DefaultButton text="outer button 5"/>
        </div>
      <header className="App-header">
        <p>
          Test focus trap with iframe modal. Uses Fluent Dialog (which adds a FocusTrapZone), as well as compiled inner Fluent code including a FocusTrapZone
        </p>
        <PrimaryButton text="open dialog" onClick={toggleHideDialog}/>
      </header>
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        modalProps={modalProps}
        >
          {/* <iframe src='../innerFrameContent.html' title='test basic iframe'/> */}
          {/* <iframe src='../innerFrameContentFocusTrap.html' title='test innerfocustrap iframe'/> */}
          <iframe src='../compiled_fluent_focusTrapZoneInner.html' title='test innerfocustrap iframe w compiled fluent content'/>
      </Dialog>
    </div>
  );
}

export default App;
