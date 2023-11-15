import {
  ButtonGroup,
  VStack,
  Button,
 
  Heading,
} from "@chakra-ui/react";
import { Form, Formik} from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required().min(6).max(28),
        password: Yup.string().required().min(6).max(28),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
        <VStack
          as={Form}
          w={{ base: "90%", md: "500px" }}
          m="auto"
          justify="center"
          spacing="1rem"
          h="100vh"
        >
          <Heading>Login</Heading>

          <TextField
            name="username"
            label="Username"
            placeholder="Enter username"
            autoComplete="off"
            size="lg"
          />
          <TextField
            name="password"
            label="Pasword"
            placeholder="Enter password"
            autoComplete="off"
            size="lg"
            type="password"
          />

          <ButtonGroup pt="1rem">
            <Button colorScheme="teal" type="submit">
              Login
            </Button>
            <Button onClick={() => navigate("/register")}>Create Account</Button>
          </ButtonGroup>
        </VStack>
      )}
    </Formik>
  );
};

export default Login;
