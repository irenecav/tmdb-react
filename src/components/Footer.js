import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="body__footer">
        <aside className="social">
          <ul>
            <li>
              <a
                href="https://twitter.com"
                className="fab fa-twitter-square"
                target="_blank"
                rel="noopener noreferrer"
              />
            </li>
            <li>
              <a
                href="https://facebooks.com/"
                className="fab fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
              />
            </li>
            <li>
              <a
                href="https://github.com"
                className="fab fa-github"
                target="_blank"
                rel="noopener noreferrer"
              />
            </li>
          </ul>
        </aside>
        <address>Copyright © Mis Pelis 2019</address>
      </footer>
    );
  }
}

export default Footer;
