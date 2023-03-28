
const e = React.createElement;
const { 
    DefaultButton,
    FocusTrapZone
  } = window.FluentUIReact;

'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const Content = () => {
    return (
      <FocusTrapZone>
        <DefaultButton 
          onClick={() => alert("hello")}
        >
          Hello World
        </DefaultButton>
      </FocusTrapZone>
    );
  };

// class FocusTrapButtons extends React.Component {
//     constructor(props) {
//       super(props);
//     }
  
//     render() {
//       return e(
//        <div>
//             <FocusTrapZone>
//                 <DefaultButton text='inner btn 1' />
//                 <DefaultButton text='inner btn 2' />
//                 <DefaultButton text='inner btn 3' />
//             </FocusTrapZone>
//        </div>
//       );
//     }
// }



const domContainer = document.querySelector('#content');

ReactDOM.render(
    <Content />, 
    domContainer
);

// const root = ReactDOM.createRoot(domContainer);
// root.render(e(FocusTrapButtons));
// root.render(e(LikeButton));
