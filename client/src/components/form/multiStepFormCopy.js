import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Select,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form1 = ({ formData, setFormData, nextStep }) => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: formData.fullName || '',
    },
    validationSchema,
    onSubmit: () => {
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl mr={"5%"}  py={2} id="fullName" isInvalid={formik.errors.fullName && formik.touched.fullName}>
        <FormLabel htmlFor="fullName">Full Name</FormLabel>
        <Input
          type="text"
          id="fullName"
          placeholder="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <Box color="red.500" mt={1}>
            {formik.errors.fullName}
          </Box>
        )}
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Next
      </Button>
    </form>
  );
};



const Form2 = ({ formData, setFormData, nextStep }) => {
  const toast = useToast();

  const validationSchema = Yup.object().shape({
    english: Yup.object().shape({
      speaking: Yup.string().required('Select proficiency for Speaking'),
      listening: Yup.string().required('Select proficiency for Listening'),
      reading: Yup.string().required('Select proficiency for Reading'),
      writing: Yup.string().required('Select proficiency for Writing'),
    }),
  });

  const formik = useFormik({
    initialValues: {
      english: {
        speaking: formData.english?.speaking || '',
        listening: formData.english?.listening || '',
        reading: formData.english?.reading || '',
        writing: formData.english?.writing || '',
      },
    },
    validationSchema,
    onSubmit: () => {
      nextStep();
    },
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    const [key, subKey] = id.split('.');

    // Update the form data with the selected value
    setFormData((prevData) => ({
      ...prevData,
      english: {
        ...prevData.english,
        [key]: value,
      },
    }));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl py={2} isInvalid={formik.errors.english && formik.touched.english}>
        <FormLabel>English</FormLabel>

        {/* Speaking */}
        <FormControl id="english.speaking">
          <FormLabel>Speaking</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.english.speaking}
            onChange={(e) => {
              formik.setFieldValue('english.speaking', e.target.value);
              handleInputChange({ target: { id: 'speaking', value: e.target.value } });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
        </FormControl>

        {/* Listening */}
        <FormControl id="english.listening">
          <FormLabel>Listening</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.english.listening}
            onChange={(e) => {
              formik.setFieldValue('english.listening', e.target.value);
              handleInputChange({ target: { id: 'listening', value: e.target.value } });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
        </FormControl>

        {/* Reading */}
        <FormControl id="english.reading">
          <FormLabel>Reading</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.english.reading}
            onChange={(e) => {
              formik.setFieldValue('english.reading', e.target.value);
              handleInputChange({ target: { id: 'reading', value: e.target.value } });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
        </FormControl>

        {/* Writing */}
        <FormControl id="english.writing">
          <FormLabel>Writing</FormLabel>
          <Select
            placeholder='Select one'
            value={formik.values.english.writing}
            onChange={(e) => {
              formik.setFieldValue('english.writing', e.target.value);
              handleInputChange({ target: { id: 'writing', value: e.target.value } });
            }}
          >
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
        </FormControl>

        {formik.errors.english && formik.touched.english && (
          <Box color="red.500" mt={2}>
            Please select proficiency for all fields.
          </Box>
        )}
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Next
      </Button>
    </form>
  );
};

const Form3 = ({ formData, setFormData, submitForm }) => {
  const validationSchema = Yup.object().shape({
    education: Yup.string().required('Education level is required'),
  });

  const formik = useFormik({
    initialValues: {
      education: formData.education || '',
    },
    validationSchema,
    onSubmit: () => {
      submitForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl id="education" py={2} isInvalid={formik.errors.education && formik.touched.education}>
        <FormLabel>Education Level</FormLabel>
        <RadioGroup
          name="education"
          value={formik.values.education}
          onChange={(value) => formik.setFieldValue('education', value)}
        >
          <Stack direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
            <Radio value="Under SLC">Under SLC</Radio>
            <Radio value="SLC">SLC</Radio>
            <Radio value="+2">+2</Radio>
            <Radio value="Bachelors">Bachelors</Radio>
            <Radio value="Masters">Masters</Radio>
          </Stack>
        </RadioGroup>
        {formik.errors.education && formik.touched.education && (
          <Box color="red.500" mt={1}>
            {formik.errors.education}
          </Box>
        )}
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Submit
      </Button>
    </form>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const toast = useToast();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    // Handle form submission here, e.g., send a POST request with formData
    // After successful submission, show a success toast
    toast({
      title: 'Form Submitted',
      description: 'Your form has been successfully submitted.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      {step === 1 && <Form1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && <Form2 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 3 && <Form3 formData={formData} setFormData={setFormData} submitForm={submitForm} />}
      {step > 1 && (
        <Button colorScheme="blue" variant="outline" onClick={prevStep}>
          Previous
        </Button>
      )}
    </Box>
  );
};

export default MultiStepForm;
