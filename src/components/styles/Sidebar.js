import styled from '@emotion/styled';

export const Sidebar = styled('aside')`
  width: 100%;
  border-right: 1px solid #ede7f3;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 24px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;

  background: ${props => props.theme.colors.background};

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

export const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props}>
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #ffa500 !important;
    }

    ${props =>
      props.active &&
      `
      color: #ffa500;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;
