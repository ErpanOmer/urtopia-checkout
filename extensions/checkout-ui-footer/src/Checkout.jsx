import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  BlockStack,
  InlineLayout,
  Text,
  Image,
  View,
  InlineStack,
  Heading,
  List,
  ListItem
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <BlockStack>
      <InlineLayout columns={['fill', '20%']}>
        <Text></Text>
        <Image source="https://cdn.shopify.com/s/files/1/0633/2068/6808/files/Norton_by-DigiCert_177x98_2x_5222bced-9208-4c88-95a0-51586b5b4055.png?v=1681735148"></Image>
      </InlineLayout>
      <InlineStack blockAlignment="center" inlineAlignment="center">
        <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/credit-card_2x_ea106d45-745a-4ffb-9f94-400068bfe194.png?v=1671520567&width=30"></Image>
        <Text size="medium" emphasis="bold">100% Secure Payment</Text>
      </InlineStack>
      <InlineLayout columns={['fill', 'fill', 'fill']} padding={['base', 'none', 'loose', 'none']}>
        <View inlineAlignment="center" spacing="none">
          <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18917_2x_aac5e357-f5cd-46c7-9943-f45c0cc9a227.png?v=1698837301&width=45"></Image>
          <Text size="base" emphasis="bold">Free</Text>
          <Text size="base" emphasis="bold">Shipping</Text>
        </View>
        <View inlineAlignment="center">
          <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18914_2x_7f2b9aff-6657-43b2-86a1-72de18ae1886.png?v=1698837287&width=45"></Image>
          <Text size="base" emphasis="bold">14-Day</Text>
          <Text size="base" emphasis="bold">Free Returns</Text>
        </View>
        <View inlineAlignment="center">
          <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/Mask_Group_18915_2x_f1484da6-2909-4ba3-8c93-6a991c07d6fe.png?v=1698837294&width=45"></Image>
          <Text size="base" emphasis="bold">2-Year</Text>
          <Text size="base" emphasis="bold">Warranty</Text>
        </View>
      </InlineLayout>
      <Heading level="1">Notes: </Heading>
      <View opacity="80">
        <List>
          <ListItem>Bike orders may arrive separate from accessories. To ensure that our customers can get hands on the bike ASAP. </ListItem>
          <ListItem>Taxes will be calculated at payment. </ListItem>
          <ListItem>We DO NOT ship to PO BOXES.</ListItem>
        </List>
      </View>
    </BlockStack>
  );
}