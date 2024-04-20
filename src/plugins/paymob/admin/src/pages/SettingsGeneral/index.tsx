import React, { Component } from 'react';
import {
  Main, HeaderLayout, Button, ContentLayout, Box, Alert, Typography,
  Grid,
  GridItem,
  Flex,
  Switch,
  TextInput
} from '@strapi/design-system';
import { SettingsPageTitle } from '@strapi/helper-plugin';
import { Check } from '@strapi/icons';
class SettingsGeneralPage extends Component {

  state = {
    isSubmitting: false,
    showAlert: false,
    stripeConfiguration: {
      isLiveMode: false,
      transactionProcessedCallbackURL: '',
      transactionResponseCallbackURL: '',
      apiKey: ''
    },
    error: {
      transactionProcessedCallbackURL: '',
      transactionResponseCallbackURL: '',
      apiKey: ''
    }
  }

  constructor(props: any) {
    super(props);
    this.state = {
      isSubmitting: false,
      showAlert: false,
      stripeConfiguration: {
        isLiveMode: false,
        transactionProcessedCallbackURL: '',
        transactionResponseCallbackURL: '',
        apiKey: ''
      },
      error: {
        transactionProcessedCallbackURL: '',
        transactionResponseCallbackURL: '',
        apiKey: ''
      }
    };
  }

  setShowAlert = (showAlert: boolean) => {
    this.setState({ showAlert });
  }

  handleSubmit = async () => {

    this.setState({ isSubmitting: true });
    // Send the request to the server
    setTimeout(() => {
      this.setState({ isSubmitting: false });
      this.setShowAlert(true);
    }, 500)
  }

  effect = () => {
    this.state.isSubmitting = false;
  }

  setStripeConfiguration = (stripeConfiguration: any) => {
    this.setState({ stripeConfiguration });
  }

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      stripeConfiguration: {
        ...this.state.stripeConfiguration,
        [name]: value
      }
    });
  }

  render() {
    const { showAlert, isSubmitting, stripeConfiguration, error } = this.state;
    return (
      <Main>
        <SettingsPageTitle name="Paymob" />
        <HeaderLayout
          title="Paymob API"
          primaryAction={
            <Button
              type="submit"
              loading={isSubmitting}
              onClick={this.handleSubmit}
              startIcon={<Check />}
              size="L"
            >
              {isSubmitting ? 'Saving' : 'Save'}
            </Button>
          }
        />
        <ContentLayout>
          <Box paddingBottom={2}>
            {showAlert ? (
              <Alert
                closeLabel="Close alert"
                title="Paymob configuration"
                variant="success"
                onClose={() => {
                  this.setShowAlert(false);
                }}
              >
                saved successfully.
              </Alert>
            ) : (
              ''
            )}
          </Box>
          <Box
            shadow="tableShadow"
            background="neutral0"
            paddingTop={6}
            paddingLeft={7}
            paddingRight={7}
            paddingBottom={6}
            hasRadius
          >
            <Box paddingBottom={1}>
              <Typography variant="delta">Global Setting</Typography>
            </Box>

            <Box paddingTop={2}>
              <Grid gap={4}>
                <GridItem col={12} s={12}>
                  <Box paddingTop={3}>
                    <Flex alignItems="center">
                      <Box paddingRight={4}>
                        <Typography variant="delta">Live Mode</Typography>
                      </Box>

                      <Switch
                        label="Live Mode"
                        visibleLabels
                        offLabel="Paymob is in test mode"
                        onLabel="Paymob is ready to accept payment"
                        selected={stripeConfiguration.isLiveMode}
                        onChange={() => {
                          this.setStripeConfiguration({
                            ...stripeConfiguration,
                            isLiveMode: !stripeConfiguration.isLiveMode,
                          });
                        }}
                      />
                    </Flex>
                  </Box>
                </GridItem>
              </Grid>
            </Box>

            <Box paddingTop={2}>
              <Grid gap={4}>
                <GridItem col={6} s={12}>
                  <Box paddingTop={2} paddingBottom={2}>
                    <TextInput
                      name="transactionProcessedCallbackURL"
                      label="Transaction processed callback URL"
                      required
                      value={stripeConfiguration.transactionProcessedCallbackURL}
                      error={error.transactionProcessedCallbackURL ? error.transactionProcessedCallbackURL : ''}
                      onChange={this.handleChange}
                      hint="Redirects to the success page after the  payment successful"
                    />
                  </Box>
                </GridItem>
                <GridItem col={6} s={12}>
                  <Box paddingTop={2} paddingBottom={2}>
                    <TextInput
                      name="transactionResponseCallbackURL"
                      label="Transaction response callback URL"
                      required
                      value={stripeConfiguration.transactionResponseCallbackURL}
                      error={error.transactionResponseCallbackURL ? error.transactionResponseCallbackURL : ''}
                      onChange={this.handleChange}
                      hint="Redirects to the cancel page after the  payment failed"
                    />
                  </Box>
                </GridItem>
                <GridItem col={12} s={12}>
                  <Box paddingTop={2} paddingBottom={2}>
                    <TextInput
                      name="apiKey"
                      label="API Key"
                      type="password"djas
                      required
                      value={stripeConfiguration.apiKey}
                      error={error.apiKey ? error.apiKey : ''}
                      onChange={this.handleChange}
                      hint="Redirects to the cancel page after the  payment failed"
                    />
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </Box>
        </ContentLayout>
      </Main>
    );
  }
}

export default SettingsGeneralPage;