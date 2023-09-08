const Form2 = ({ formData, setFormData, nextStep }) => {
    const validationSchema = Yup.object().shape({
      arabic: Yup.object().shape({
        speaking: Yup.string().required('Select proficiency for Speaking'),
        listening: Yup.string().required('Select proficiency for Listening'),
        reading: Yup.string().required('Select proficiency for Reading'),
        writing: Yup.string().required('Select proficiency for Writing'),
      }),
      
      education: Yup.string().required('Education is a required field'),
      workExpNepal: Yup.object().shape({
        field: Yup.string().required('Field is required'),
        employer: Yup.string().required('Employer is required'),
        duration: Yup.number().required('Duration is required').positive().integer(),
        address: Yup.string().required('Address is required'),
      }),
      
      otherSkills: Yup.string().required('Other skills is a required filed'),
    });
  
    const formik = useFormik({
      initialValues: {
        arabic: {
          speaking: formData.arabic?.speaking || '',
          listening: formData.arabic?.listening || '',
          reading: formData.arabic?.reading || '',
          writing: formData.arabic?.writing || '',
        },
       
        education: formData.education || '',
        workExpNepal: {
          field: formData.workExpNepal?.field || '',
          employer: formData.workExpNepal?.employer || '',
          duration: formData.workExpNepal?.duration || '',
          address: formData.workExpNepal?.address || '',
        },
        
        otherSkills: Yup.string().max(255, 'Other Skills must be 255 characters or less'),
      },
  
      validationSchema,
      onSubmit: () => {
        nextStep();
      },
    });
  
    const handleInputChange = (event) => {
      const { id, value } = event.target;
      const [section, key] = id.split('.');
  
      if (section === 'education' || section === 'otherSkills') {
        // Handle 'education' and 'otherSkills' here
        setFormData((prevData) => ({
          ...prevData,
          [section]: value,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [section]: {
            ...prevData[section],
            [key]: value,
          },
        }));
      }
    };
  
    return (
      <form onSubmit={formik.handleSubmit}>
        <Box color={useColorModeValue('blue.700', 'gray.1000')}>
          <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
            Qualification
          </Heading>
          <Heading as='h2' size='md' align={'left'} py={2}>Language Proficeincy</Heading>
  
          {/*🔴 ARABIC */}
  
          <FormControl py={2} isInvalid={formik.errors.arabic && formik.touched.arabic}>
            <FormLabel>Arabic</FormLabel>
  
            {/* Speaking */}
            <FormControl id="arabic.speaking">
              <FormLabel>Speaking</FormLabel>
              <Select
                placeholder='Select one'
                value={formik.values.arabic.speaking}
                onChange={(e) => {
                  formik.setFieldValue('arabic.speaking', e.target.value);
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
            <FormControl id="arabic.listening">
              <FormLabel>Listening</FormLabel>
              <Select
                placeholder='Select one'
                value={formik.values.arabic.listening}
                onChange={(e) => {
                  formik.setFieldValue('arabic.listening', e.target.value);
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
            <FormControl id="arabic.reading">
              <FormLabel>Reading</FormLabel>
              <Select
                placeholder='Select one'
                value={formik.values.arabic.reading}
                onChange={(e) => {
                  formik.setFieldValue('arabic.reading', e.target.value);
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
            <FormControl id="arabic.writing">
              <FormLabel>Writing</FormLabel>
              <Select
                placeholder='Select one'
                value={formik.values.arabic.writing}
                onChange={(e) => {
                  formik.setFieldValue('arabic.writing', e.target.value);
                  handleInputChange({ target: { id: 'writing', value: e.target.value } });
                }}
              >
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </Select>
            </FormControl>
  
            {formik.errors.arabic && formik.touched.arabic && (
              <Box color="red.500" mt={2}>
                Please select proficiency for all fields.
              </Box>
            )}
          </FormControl>

  
          <Spacer />
          {/* 🔴 EDUCATION */}
          <Heading as='h2' size='md' align={'left'} py={2}>Education</Heading>
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
          <Spacer />
          {/* 🔴 NEPAL WORK EXPERIENCE */}
          <Heading as='h2' size='md' align={'left'} py={2}>Work Experience In Nepal</Heading>
          <FormControl py={2} isInvalid={formik.errors.workExpNepal && formik.touched.workExpNepal}>
            <FormLabel>Work Experience in Nepal</FormLabel>
  
            {/* Field */}
            <FormControl id="workExpNepal.field">
              <FormLabel>Field</FormLabel>
              <Input
                placeholder="Field"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={formik.values.workExpNepal.field}
                onChange={(e) => {
                  formik.setFieldValue('workExpNepal.field', e.target.value);
                  handleInputChange({ target: { id: 'workExpNepal.field', value: e.target.value } });
                }}
              />
            </FormControl>
  
            {/* Employer */}
            <FormControl id="workExpNepal.employer">
              <FormLabel htmlFor="nepali-employer">Employer</FormLabel>
              <Input
                placeholder="Employer"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={formik.values.workExpNepal.employer}
                onChange={(e) => {
                  formik.setFieldValue('workExpNepal.employer', e.target.value);
                  handleInputChange({ target: { id: 'workExpNepal.employer', value: e.target.value } });
                }}
              />
            </FormControl>
  
            {/* Duration */}
            <FormControl id="workExpNepal.duration">
              <FormLabel>Duration</FormLabel>
              <Input
                placeholder="In years"
                _placeholder={{ color: 'gray.500' }}
                type="number"
                value={formik.values.workExpNepal.duration}
                onChange={(e) => {
                  formik.setFieldValue('workExpNepal.duration', e.target.value);
                  handleInputChange({ target: { id: 'workExpNepal.duration', value: e.target.value } });
                }}
              />
            </FormControl>
  
            {/* Address */}
            <FormControl id="workExpNepal.address">
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="Address"
                _placeholder={{ color: 'gray.500' }}
                type="text"
                value={formik.values.workExpNepal.address}
                onChange={(e) => {
                  formik.setFieldValue('workExpNepal.address', e.target.value);
                  handleInputChange({ target: { id: 'workExpNepal.address', value: e.target.value } });
                }}
              />
            </FormControl>
  
            {formik.errors.workExpNepal && formik.touched.workExpNepal && (
              <Box color="red.500" mt={2}>
                Please fill in all work experience fields.
              </Box>
            )}
          </FormControl>

          <Heading as='h3' size='md' align={'left'} py={2} >Other Skills</Heading>

          <FormControl
            mr={"5%"}
            py={2}
            id="otherSkills"
            isInvalid={formik.errors.otherSkills && formik.touched.otherSkills}
          >
            <FormLabel htmlFor="otherSkills">Other Skills</FormLabel>
            <Textarea
              type="text"
              id="otherSkills"
              placeholder="Other skills"
              value={formik.values.otherSkills}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.otherSkills && formik.touched.otherSkills && (
              <Box color="red.500" mt={1}>
                {formik.errors.otherSkills}
              </Box>
            )}
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4}>
            Next
          </Button>
        </Box>
      </form>
    )
  }