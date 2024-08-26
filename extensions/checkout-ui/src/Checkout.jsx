import {
  useApi,
  useTranslate,
  useOrder,
  useStorage,
  useLanguage,
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
  const order = useOrder()
  const { isoCode } = useLanguage()

  if (amount < 1500) {
    return
  }

  const total = i18n.formatCurrency(amount)
  const installment = i18n.formatCurrency(amount / 24)

  const onPress = () => {
    ui.overlay.close('my-modal')
  }

  const model = useMemo(() => (
    <Modal
      id="my-modal"
      padding
      title={translate('About_Klarna_financing')}
    >
      <View blockAlignment="start" padding={['none', 'none', 'loose', 'none']}>
        <Text size="medium" emphasis="bold">{ translate('Choose_Klarna')}</Text>
        {/* <Text size="medium" emphasis="bold">{ translate('Get_what')}</Text> */}
      </View>
      <BlockStack padding="base" border="base" cornerRadius="base">
        <View>
          <InlineLayout columns={['auto', 'fill']} padding={['none', 'none', 'extraTight', 'none']}>
            <Text size="large" emphasis="bold">{ translate('Pay_in_24')}</Text>
            <Text></Text>
          </InlineLayout>
          <InlineLayout columns={['auto', 'fill', 'auto']}>
            <Text size="medium" emphasis="bold">{translate('From_month', { installment })}</Text>
            <Text></Text>
            <Badge padding="tight" tone="critical" size="fill" emphasis="bold">&nbsp;&nbsp;&nbsp;&nbsp;{translate('24_payments')}&nbsp;&nbsp;&nbsp;&nbsp;</Badge>
          </InlineLayout>
        </View>
        <Divider />
        <View>
          <InlineLayout columns={['auto', 'fill', 'auto']}>
            <View opacity="50"><Text size="large" emphasis="bold">APR</Text></View>
            <Text></Text>
            <View opacity="50"><Text size="large" emphasis="bold">{ translate('Total') }</Text></View>
          </InlineLayout>
          <InlineLayout columns={['auto', 'fill', 'auto']} padding={['extraTight', 'none', 'extraTight', 'none']}>
            <Text size="medium" emphasis="bold">{ translate('0pa') }</Text>
            <Text></Text>
            <Text size="medium" emphasis="bold">{ translate('total_Tax', { total }) }</Text>
          </InlineLayout>
          <InlineLayout columns={['fill', 'auto']}>
            <Text></Text>
            <View opacity="50"><Text>{ translate('Promotion_Price') }</Text></View>
          </InlineLayout>
        </View>
      </BlockStack>
      <View padding={['loose', 'none', 'loose', 'none']}>
        <Heading level="{3}">{ translate('How_it_works') }</Heading>
      </View>
      <BlockStack padding="base" border="base" cornerRadius="base">
        <List spacing="loose">
          <ListItem><Text size="medium" emphasis="bold">{ translate('You_are_now_at') }</Text></ListItem>
          <ListItem><Text size="medium" emphasis="bold">{ translate('Fill_in_your') }</Text></ListItem>
          <ListItem><Text size="medium" emphasis="bold">{ translate('Confirm_your_contact') }</Text></ListItem>
          <ListItem>
            <Text size="medium" emphasis="bold">{ translate('Now_you_can') }</Text>
            <View padding={['loose', 'none', 'none', 'none']}></View>
            {
              isoCode === "de-DE" ? <Image source="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/output_3_9ad55cd4-340a-4d36-84c0-8ce7cb710538.png?v=1724655768&width=450"></Image> : <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/20230614-143316.png?v=1686724422&width=450"></Image>
            }
          </ListItem>
          <ListItem><Text size="medium" emphasis="bold">{ translate('Select_Klarna') }</Text></ListItem>
          <ListItem><Text size="medium" emphasis="bold">{ translate('Now_you_will_be') }</Text></ListItem>
          <ListItem><Text size="medium" emphasis="bold">{ translate('Enjoy_your_shopping') }</Text></ListItem>
        </List>
      </BlockStack>
      <View opacity="90" padding={['base', 'none', 'loose', 'none']}>
        <TextBlock>
          { translate('the_APR') }&nbsp;&nbsp;
          <Link external to="/pages/refund-policy">{ translate('Refund_Policy') }</Link>
        </TextBlock>
      </View>
      <Button
        onPress={onPress}
      >
        { translate('Continue_Check_out') }
      </Button>
      <View padding={['loose', 'none', 'none', 'none']}></View>
    </Modal>
  ))


  return (
    <InlineLayout padding="tight" border="base" cornerRadius="base" columns={['15%', 'fill']} blockAlignment="center" inlineAlignment="start" spacing="extraTight">
      <Image source="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Klarna-Logo.wine_2x_4831cc33-3ad3-4cb7-8d01-bc04c379811a.png?v=1686369579"></Image>
      <View>
        <Text>{ translate('installment', { installment }) }&nbsp;&nbsp;</Text>
        <Link overlay={model}>{ translate('Learn_how_to_use') }</Link>
      </View>
    </InlineLayout>
  )
}