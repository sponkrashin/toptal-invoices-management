import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField, Typography, FormHelperText, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import Card from 'components/Card';
import Spinner from 'components/Spinner';
import { NavigationTarget, useAppRouter } from 'hooks/useAppRouter';
import { useUpdateCompanyDetails } from 'hooks/useUpdateCompanyDetails';
import { useDispatch, useSelector } from 'store/hooks';
import { selectUserCompanyDetails, updateCompanyDetails } from 'store/userInfoSlice';
import styles from './CompanyDetails.module.scss';

interface FormInput {
  companyName: string;
  companyAddress: string;
  vatNumber: string;
  registrationNumber: string;
  iban: string;
  swift: string;
}

const formSchema = zod.object({
  companyName: zod
    .string()
    .min(3, { message: 'The company name length should be between 3 and 16 symbols' })
    .max(16, { message: 'The company name length should be between 3 and 16 symbols' }),
  companyAddress: zod.string().min(1, { message: 'This field is required' }),
  vatNumber: zod.string().min(1, { message: 'This field is required' }),
  registrationNumber: zod.string().min(1, { message: 'This field is required' }),
  iban: zod.string(),
  swift: zod.string(),
});

const GENERIC_ERROR = 'Something unusual happened. Please, try again later';

const CompanyDetails = () => {
  const userCompanyDetails = useSelector(selectUserCompanyDetails);
  const { isLoading, data: updatedInfo, error, execute: updateInfo } = useUpdateCompanyDetails();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      companyName: userCompanyDetails?.name,
      companyAddress: userCompanyDetails?.address,
      vatNumber: userCompanyDetails?.vatNumber,
      registrationNumber: userCompanyDetails?.regNumber,
      iban: userCompanyDetails?.iban,
      swift: userCompanyDetails?.swift,
    },
    resolver: zodResolver(formSchema),
  });

  const dispatch = useDispatch();
  const { navigate } = useAppRouter();

  useEffect(() => {
    if (updatedInfo) {
      dispatch(updateCompanyDetails(updatedInfo.companyDetails));

      if (!userCompanyDetails) {
        navigate(NavigationTarget.Dashboard);
      }
    }
  }, [updatedInfo, dispatch, userCompanyDetails, navigate]);

  const handleFormSubmit = (data: FormInput) => {
    if (isLoading) {
      return;
    }

    updateInfo({
      name: data.companyName,
      address: data.companyAddress,
      vatNumber: data.vatNumber,
      regNumber: data.registrationNumber,
      iban: data.iban,
      swift: data.swift,
    });
  };

  return (
    <Card className={styles.card} contentClassName={styles.content}>
      <Typography component="h1" variant="h5">
        Company Details
      </Typography>
      {updatedInfo && (
        <Grid container justifyContent="flex-start">
          <Grid item>
            <FormHelperText className={styles.successMessage} data-test="success-message">
              User company details were successfully updated!
            </FormHelperText>
          </Grid>
        </Grid>
      )}
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          {...register('companyName')}
          margin="normal"
          fullWidth
          label="Company Name"
          error={!!errors.companyName}
          data-test="company-name"
        />
        {errors.companyName && (
          <FormHelperText error data-test="company-name-error">
            {errors.companyName.message}
          </FormHelperText>
        )}
        <TextField
          {...register('companyAddress')}
          margin="normal"
          fullWidth
          label="Company Address"
          multiline
          rows={2}
          error={!!errors.companyAddress}
          data-test="company-address"
        />
        {errors.companyAddress && (
          <FormHelperText error data-test="company-address-error">
            {errors.companyAddress.message}
          </FormHelperText>
        )}
        <TextField
          {...register('vatNumber')}
          margin="normal"
          fullWidth
          label="VAT Number"
          error={!!errors.vatNumber}
          data-test="company-vat"
        />
        {errors.vatNumber && (
          <FormHelperText error data-test="company-vat-error">
            {errors.vatNumber.message}
          </FormHelperText>
        )}
        <TextField
          {...register('registrationNumber')}
          margin="normal"
          fullWidth
          label="Registration Number"
          error={!!errors.registrationNumber}
          data-test="company-reg-number"
        />
        {errors.registrationNumber && (
          <FormHelperText error data-test="company-reg-error">
            {errors.registrationNumber.message}
          </FormHelperText>
        )}
        <TextField
          {...register('iban')}
          margin="normal"
          fullWidth
          label="IBAN"
          error={!!errors.iban}
          data-test="company-iban"
        />
        {errors.iban && (
          <FormHelperText error data-test="company-iban-error">
            {errors.iban.message}
          </FormHelperText>
        )}
        <TextField
          {...register('swift')}
          margin="normal"
          fullWidth
          label="SWIFT"
          error={!!errors.swift}
          data-test="company-swift"
        />
        {errors.swift && (
          <FormHelperText error data-test="company-swift-error">
            {errors.swift.message}
          </FormHelperText>
        )}
        {error && (
          <FormHelperText error data-test="form-error">
            {error.isBadRequest() ? error.message : GENERIC_ERROR}
          </FormHelperText>
        )}
        <Button
          className={styles.submitButton}
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading}
          data-test="submit-company-details"
        >
          <Spinner size="large" spinning={isLoading} inContainer />
          Save
        </Button>
      </form>
    </Card>
  );
};

export default CompanyDetails;
