import { Form, Input, Button, SearchIcon } from "./headerSearch.styled";

const HeaderSearch = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="search" placeholder="Movie search" />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </Form>
  );
};

export default HeaderSearch;
