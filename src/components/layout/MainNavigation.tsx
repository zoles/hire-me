import { Avatar, Header } from "@primer/components";

const MainNavigation: React.FC = () => {
  return (
    <Header>
      <Header.Item>
        <Avatar
          src="https://assets.website-files.com/5f64c1a06bfbf4ea417a71af/5faab8e4497c0827cffce4c2_Circle-White_Red-400x400.png"
          size={32}
          mr={2}
        />
        <strong>Frontend Demo</strong>
      </Header.Item>
      <Header.Item full></Header.Item>
      <Header.Item>
        <Header.Link href="https://github.com/zoles/hire-me">
          <Avatar
            src="https://github.com/github.png"
            size={32}
            alt="zoles github"
          />
        </Header.Link>
      </Header.Item>
    </Header>
  );
};
export default MainNavigation;
