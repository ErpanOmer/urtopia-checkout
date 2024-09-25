import {
  Banner,
  useApi,
  useShop,
  useTranslate,
  reactExtension,
  BlockStack,
  InlineLayout,
  Text,
  Image,
  View,
  InlineStack,
  Heading,
  InlineSpacer,
  List,
  ListItem,
  Link
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const shop = useShop()
  
  return (
    <BlockStack>
      {
        shop.myshopifyDomain !== 'urtopia-de.myshopify.com' ? (<InlineLayout columns={['fill', '20%']}>
          <Text></Text>
          <Image source="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Norton_by-DigiCert_177x98_2x_5222bced-9208-4c88-95a0-51586b5b4055.png?v=1681735148"></Image>
        </InlineLayout>) : null
      } 
      {/* <InlineStack blockAlignment="center" inlineAlignment="center">
        <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/credit-card_2x_ea106d45-745a-4ffb-9f94-400068bfe194.png?v=1671520567&width=30"></Image>
        <Text size="medium" emphasis="bold">{ translate('secure_payment') }</Text>
      </InlineStack> */}
      <InlineLayout columns={['fill', 'fill']} padding={['base', 'none', 'none', 'none']}>
        <InlineLayout columns={[25, 'fill']} blockAlignment="center" inlineAlignment="start" spacing="extraTight">
          <Image source="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20240925-140658.png?v=1727250137"></Image>
          <Text size="base" emphasis="bold">{ translate('14-Day Return') }</Text>
        </InlineLayout>
        <InlineLayout columns={[25, 'fill']} blockAlignment="center" inlineAlignment="start" spacing="extraTight">
          <Image source="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20240925-140706.png?v=1727250137"></Image>
          <Link appearance="critical" to="mailto:support@newurtopia.com"><Text size="base" emphasis="bold">support@newurtopia.com</Text></Link>
        </InlineLayout>
      </InlineLayout>
      <InlineLayout columns={['fill', 'fill']} padding={['base', 'none', 'loose', 'none']}>
        <InlineLayout columns={[25, 'fill']} blockAlignment="center" inlineAlignment="start" spacing="extraTight">
          <Image source="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20240925-140648.png?v=1727250137"></Image>
          <Text size="base" emphasis="bold">{ translate('2-Year Warranty') }</Text>
        </InlineLayout>
        <InlineLayout columns={[25, 'fill']} blockAlignment="center" inlineAlignment="start" spacing="extraTight">
          <Image source="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/20240925-140658.png?v=1727250137"></Image>
          <Text size="base" emphasis="bold">{ translate('30-Day Price Guarantee') }</Text>
        </InlineLayout>
      </InlineLayout>
      {/* <Heading level="1">{ translate('notes') }</Heading>
      <View opacity="80">
        <List>
          <ListItem>{ translate('arrive') }</ListItem>
          <ListItem>{ translate('tax') }</ListItem>
          <ListItem>{ translate('boxs') }</ListItem>
        </List>
      </View> */}
    </BlockStack>
  );
}