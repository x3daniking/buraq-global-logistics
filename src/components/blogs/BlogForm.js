import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CombinedFields, BlogFormContainer, FormButton, FormError, FormField, Message } from './BlogsStyles';

const BlogForm = () => {
  const formik = useFormik({
    initialValues: {
      website: '',
      name: '',
      email: '',
      comment: '',
    },
    validationSchema: Yup.object({
      website: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9]+$/, "Limit Exceeded").required('Required'),
      comment: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <BlogFormContainer onSubmit={formik.handleSubmit}>
      <FormField>
        <label htmlFor="comment">Comment *</label>
        <Message
          id="comment"
          name="comment"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
        />
        {formik.touched.comment && formik.errors.comment ? (
          <FormError>{formik.errors.comment}</FormError>
        ) : null}
      </FormField>
      <FormField>
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <FormError>{formik.errors.name}</FormError>
        ) : null}
      </FormField>
      <FormField>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <FormError>{formik.errors.email}</FormError>
        ) : null}
      </FormField>
          <FormField>
            <label htmlFor="website">Website *</label>
            <input
              id="website"
              name="website"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.website}
            />
            {formik.touched.website && formik.errors.website ? (
              <FormError>{formik.errors.website}</FormError>
            ) : null}
          </FormField>
        <FormButton type="submit">Post Comment</FormButton>
    </BlogFormContainer>
  );
}

export default BlogForm;
