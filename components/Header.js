import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>My portfolio:</span> Keith Tachibana
      </h1>
      <p className={headerStyles.description}>My name is Keith Tachibana and this is my portfolio.</p>
    </div>
  );
}

export default Header;
