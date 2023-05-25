import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBreadcrumb = styled.div`
  background-color: var(--light-gray-color);
  width: 100%;

  margin: 10px 0;
`;

const StyledBreadcrumbMenu = styled.ul`
  display: flex;
  align-items: center;
  padding: 25px 15px;
  flex-direction: ${(props) =>
    props.currentLanguage === "ar" ? "row-reverse" : "row"};
  list-style-type: none;
`;

const StyledBreadcrumbItem = styled.li`
  margin-right: 7px;
  ${(props) =>
    props.currentLanguage !== "ar"
      ? `
  ::after {
    margin-left: 10px;
    color: var(--primary-color);
    content: "/";
  }
  :last-of-type {
    ::after {
      content: "";
    }
  }
  `
      : `
      ::before {
        margin-right: 10px;
        color: var(--primary-color);
        content: "/";
    }
        :last-of-type {
            ::before {
            content: "";
            }
        }`};
`;

const StyledBreadcrumbItemLink = styled(Link)`
  margin: 0 5px;
  text-decoration: none;

  color: ${(props) =>
    props.to ? "var(--primary-color);" : "var(--dark-gray-color);"};

  :active {
    color: var(--primary-color);
  }
`;

export const Breadcrumb = ({ children }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <StyledBreadcrumb currentLanguage={currentLanguage}>
      <StyledBreadcrumbMenu currentLanguage={currentLanguage}>
        {children}
      </StyledBreadcrumbMenu>
    </StyledBreadcrumb>
  );
};

export const BreadcrumbItem = ({ children, ...otherProps }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <StyledBreadcrumbItem currentLanguage={currentLanguage} >
      <StyledBreadcrumbItemLink currentLanguage={currentLanguage} {...otherProps}>
        {children}
      </StyledBreadcrumbItemLink>
    </StyledBreadcrumbItem>
  );
};
