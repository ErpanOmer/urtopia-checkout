import {
  useApi,
  useTranslate,
  useStorage,
  reactExtension,
  Link,
  View,
  Text,
  TextBlock,
  Image,
  Modal,
  InlineLayout,
  useTotalAmount,
  Button,
  Divider,
  BlockStack,
  Badge,
  Heading,
  List,
  ListItem
} from '@shopify/ui-extensions-react/checkout';
import { useMemo } from 'react';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { i18n, ui, ...extension } = useApi();
  const { amount } = useTotalAmount()

  console.log(extension);

  // if (amount < 1500) {
  //   return
  // }

  const total = i18n.formatCurrency(amount)
  const installment = i18n.formatCurrency(amount / 24)

  const onPress = () => {
    console.log(ui);
    ui.overlay.close('my-modal')
  }

  const model = useMemo(() => (
    <Modal
      id="my-modal"
      padding
      title="About Klarna financing"
    >
      <View blockAlignment="start" padding={['none', 'none', 'loose', 'none']}>
        <Text size="medium" emphasis="bold">Choose Klarna as yourpayment option. </Text>
        <Text size="medium" emphasis="bold">Get what you love, choose how you pay. </Text>
      </View>
      <BlockStack padding="base" border="base" cornerRadius="base">
        <View>
          <InlineLayout columns={['auto', 'fill']} padding={['none', 'none', 'extraTight', 'none']}>
            <Text size="large" emphasis="bold">Pay in 24 months, 0 APR*</Text>
            <Text></Text>
          </InlineLayout>
          <InlineLayout columns={['auto', 'fill', 'auto']}>
            <Text size="medium" emphasis="bold">From {installment} /month</Text>
            <Text></Text>
            <Badge padding="tight" tone="critical" size="fill" emphasis="bold">&nbsp;&nbsp;&nbsp;&nbsp;24 payments&nbsp;&nbsp;&nbsp;&nbsp;</Badge>
          </InlineLayout>
        </View>
        <Divider />
        <View>
          <InlineLayout columns={['auto', 'fill', 'auto']}>
            <View opacity="50"><Text size="large" emphasis="bold">APR</Text></View>
            <Text></Text>
            <View opacity="50"><Text size="large" emphasis="bold">Total</Text></View>
          </InlineLayout>
          <InlineLayout columns={['auto', 'fill', 'auto']} padding={['extraTight', 'none', 'extraTight', 'none']}>
            <Text size="medium" emphasis="bold">0% p.a. (fixed)</Text>
            <Text></Text>
            <Text size="medium" emphasis="bold">{total} + Tax</Text>
          </InlineLayout>
          <InlineLayout columns={['fill', 'auto']}>
            <Text></Text>
            <View opacity="50"><Text>Promotion Price, limited time only</Text></View>
          </InlineLayout>
        </View>
      </BlockStack>
      <View padding={['loose', 'none', 'loose', 'none']}>
        <Heading level="{3}">How it works</Heading>
      </View>
      <BlockStack padding="base" border="base" cornerRadius="base">
        <List spacing="loose">
          <ListItem><Text size="medium" emphasis="bold">You are now at check out with your selected e-bikes</Text></ListItem>
          <ListItem><Text size="medium" emphasis="bold">Fill in your contact info and shipping address, click Continue to Shipping.</Text></ListItem>
          <ListItem><Text size="medium" emphasis="bold">Confirm your contact and Deliver info, click Continue to Payment</Text></ListItem>
          <ListItem>
            <Text size="medium" emphasis="bold">Now you can find Klarna as a payment option in the payment section as the image below</Text>
            <View padding={['loose', 'none', 'none', 'none']}></View>
            <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230614-143316.png?v=1686724422&width=450"></Image>
          </ListItem>
          <ListItem><Text size="medium" emphasis="bold">Select Klarna and confirm your billing address, click Pay Now</Text></ListItem>
          <ListItem><Text size="medium" emphasis="bold">Now you will be redirected to Klarna payment portal, choose monthly installments as the option that works best for you</Text></ListItem>
          <ListItem><Text size="medium" emphasis="bold">Enjoy your shopping and let automatic payments do the rest</Text></ListItem>
        </List>
      </BlockStack>
      <View opacity="90" padding={['base', 'none', 'loose', 'none']}>
        <TextBlock>
          the 0% APR financing is a special subsidy provided by Urtopia, there will be a 13% cancelling fee if an order made with this financing support is cancelled, other payments method made through Klarna shall shall stay unaffected.&nbsp;&nbsp;
          <Link external to="/pages/refund-policy">Refund Policy</Link>
        </TextBlock>
      </View>
      <Button
        onPress={onPress}
      >
        Continue Check out
      </Button>
      <View padding={['loose', 'none', 'none', 'none']}></View>
    </Modal>
  ))


  return (
    <InlineLayout padding="tight" border="base" cornerRadius="base" columns={['15%', 'fill']} blockAlignment="center" inlineAlignment="start" spacing="extraTight">
      <Image source="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Klarna-Logo.wine_2x_4831cc33-3ad3-4cb7-8d01-bc04c379811a.png?v=1686369579"></Image>
      <View>
        <Text> 0% APR, 24 months, {installment}/month.&nbsp;&nbsp;</Text>
        <Link overlay={model}>Learn how to use</Link>
      </View>
    </InlineLayout>
  )
}