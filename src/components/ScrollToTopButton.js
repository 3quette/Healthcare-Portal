import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

class ScrollToTopButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleVisibility);
  }

  toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      this.setState({ isVisible: true });
    } else {
      this.setState({ isVisible: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
        <button onClick={this.scrollToTop}><FaArrowUp /></button>
      </div>
    );
  }
}

export default ScrollToTopButton;
