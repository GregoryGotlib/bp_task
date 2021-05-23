import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 90px 0 20px;
`;

export const EmailTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: white;
  }
`;

export const CommentTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: white;
  }
`;

export const Filter = styled(TextField)``;

export const CommentContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormCard = styled(Card)`
  width: 260px;
  background-color: #efefef !important;
  display: block;
`;

export const FormCardContent = styled(CardContent)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentsContainer = styled.div``;

export const EmailFieldWrapper = styled.div`
  margin: 10px 0;
`;

export const SubmitButtonWrapper = styled.div`
  margin: 10px 0;
  align-self: center;
`;

export const CommentFieldWrapper = styled.div`
  margin: 10px 0;
`;

export const FilterWrapper = styled.div`
  text-align: center;
`;

export const CommentsWrapper = styled.div`
  margin-top: 40px;
  line-height: 22px;
`;

export const CommentsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const ComponentsCardContent = styled(CardContent)``;

export const CommentWrapper = styled.div`
  color: gray;
`;

export const EmailWrapper = styled.div`
  font-weight: 600;
`;

export const AvatarImage = styled.img`
  width: 70px;
  margin-inline-end: 10px;
  border-radius: 7px;
  cursor: pointer;
`;

export const AvatarWrapper = styled.div``;

export const TextWrapper = styled.div``;

export const TypographyContainer = styled(Typography)`
  padding: 4px;
`;

export const FormCardHeader = styled(CardHeader)``;
