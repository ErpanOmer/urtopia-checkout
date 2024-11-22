import {
  reactExtension,
  ScrollView,
  InlineLayout,
  BlockLayout,
  View,
  Text,
  TextBlock,
  Image,
  Link,
  useApi,
} from "@shopify/ui-extensions-react/checkout";
import { useState } from "react";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const { ui } = useApi();
  const [state, setState] = useState([105, 105, 105, 105, 105]);

  function onPress(index) {
    setState((state) => {
      state[index] = isNaN(state[index]) ? 105 : "auto";

      return [...state];
    });
  }

  return (
    <ScrollView direction="inline" border="none" padding={['base', 'none']}>
      <InlineLayout spacing="base" columns="80%">
        <BlockLayout
          border="base"
          padding="base"
          cornerRadius="base"
          rows={[state[0], "auto", "auto", "auto"]}
          spacing="base"
          inlineAlignment="start"
        >
          <View padding="none" border="none" overflow="hidden">
            <Text size="base">
              I love my new electric bike from Urtopia. It feels like the
              future. The intelligent functions make cycling even more enjoyable
              and safer. The service is always very fair and fast. Even stupid
              questions about how the rear light works were answered quickly and
              easily with the help of photos and videos. That's how I imagine
              customer service to be. It's a shame that you're not allowed to
              ride faster in Germany, but even so it's really fun. The turbo
              button feels like I'm Michael Knight in Knight Rider and can jump
              over 10 obstacles at once 😅 Keep it up 👏.
            </Text>
          </View>
          <View
            padding="none"
            border="none"
            overflow="hidden"
            inlineAlignment="end"
            minInlineSize="100%"
          >
            <Link onPress={() => onPress(0)}>Read more</Link>
          </View>
          <Text emphasis="bold" size="medium">
            -Consumer
          </Text>
          <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/24429.svg?v=1732247597&width=200" />
        </BlockLayout>
        <BlockLayout
          border="base"
          padding="base"
          cornerRadius="base"
          rows={[state[1], "auto", "auto", "auto"]}
          spacing="base"
          inlineAlignment="start"
        >
          <View padding="none" border="none" overflow="hidden">
            <Text size="base">
              <TextBlock>
                I've been buying RAD Bikes for 8 years, five of them in fact now
                and have never received close to the service I have received
                today, all in the course of an hour or so. CRAZY. RAD bikes are
                great however too heavy and lack support. AND failed to correct
                the same poor design issues.
              </TextBlock>
              <TextBlock>
                It was either a three-wheeler because of my back and age. NO WAY
                after seeing this beauty! Now I won't be limited to the same
                distance and trail everyday. Thanks to Urtopia Ebikes and their
                great support!
              </TextBlock>
            </Text>
          </View>
          <View
            padding="none"
            border="none"
            overflow="hidden"
            inlineAlignment="end"
            minInlineSize="100%"
          >
            <Link onPress={() => onPress(1)}>Read more</Link>
          </View>
          <Text emphasis="bold" size="medium">
            -LVLYRI
          </Text>
          <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/24429.svg?v=1732247597&width=200" />
        </BlockLayout>
        <BlockLayout
          border="base"
          padding="base"
          cornerRadius="base"
          rows={[state[2], "auto", "auto", "auto"]}
          spacing="base"
          inlineAlignment="start"
        >
          <View padding="none" border="none" overflow="hidden">
            <Text size="base">
              <TextBlock>
                I was interested in the Urtopia bike from the first time I heard
                about it. At the time though there were only options for taller
                people (5'7" and taller, which I'm not!). Eventually though they
                did offer a smaller frame, and I ordered one right away.
              </TextBlock>
              <TextBlock>
                My commute to the office is over 17 miles, and I don't own a
                car. I had been relying on colleagues who could give me a ride,
                but that limits me to days they are going in, and are available
                to make a detour to pick me up. With my Urtopia Carbon 1S I can
                get there in about 55 minutes, averaging close to 19 MPH. This
                means I have more independence for getting to work, and a fast
                way to get around when doing errands.
              </TextBlock>
              <TextBlock>
                I have already pre-ordered the new Carbon 1 Pro!
              </TextBlock>
            </Text>
          </View>
          <View
            padding="none"
            border="none"
            overflow="hidden"
            inlineAlignment="end"
            minInlineSize="100%"
          >
            <Link onPress={() => onPress(2)}>Read more</Link>
          </View>
          <Text emphasis="bold" size="medium">
            -Colin Holgate
          </Text>
          <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/24429.svg?v=1732247597&width=200" />
        </BlockLayout>
        <BlockLayout
          border="base"
          padding="base"
          cornerRadius="base"
          rows={[state[3], "auto", "auto", "auto"]}
          spacing="base"
          inlineAlignment="start"
        >
          <View padding="none" border="none" overflow="hidden">
            <Text size="base">
              <TextBlock>
                I have the chord x….on just about every ride; someone stops me
                and says that’s a great looking bike. Indeed it is. One of the
                nicest features is the manner in which the cables are tunneled
                thru the frame and little guards on the frame where a cable
                could rub.
              </TextBlock>
              <TextBlock>
                Even the fenders have a bit of flare too…they too look kind of
                stylish. The overall fit and finish are exceptional…
              </TextBlock>
              <TextBlock>
                Another clever feature is the blue tooth connectivity so that I
                can play music while riding.
              </TextBlock>
              <TextBlock>
                The only problem is that with all the stops to show off the
                bike; I don’t get to ride longer.
              </TextBlock>
              <TextBlock>
                The customer service has been beyond expectations。
              </TextBlock>
              <TextBlock>
                I think this is the “best” product that I have purchased in
                years. It’s right up there with my Lexus CT 200h…an equally
                stylish and well engineered product.
              </TextBlock>
            </Text>
          </View>
          <View
            padding="none"
            border="none"
            overflow="hidden"
            inlineAlignment="end"
            minInlineSize="100%"
          >
            <Link onPress={() => onPress(3)}>Read more</Link>
          </View>
          <Text emphasis="bold" size="medium">
            -Laurance Shindeman
          </Text>
          <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/24429.svg?v=1732247597&width=200" />
        </BlockLayout>
        <BlockLayout
          border="base"
          padding="base"
          cornerRadius="base"
          rows={[state[4], "auto", "auto", "auto"]}
          spacing="base"
          inlineAlignment="start"
        >
          <View padding="none" border="none" overflow="hidden">
            <Text size="base">
              <TextBlock>
                Hi. I love my Carbon 1/S. I ride it all over San Franciso almost
                every day. I zip past all other riders and will beat anyone on a
                bike or in a car in the uper pennisula. People stop me all the
                time to ask about my bike and to learn to ride like I do (the
                hills here are insane).
              </TextBlock>
              <TextBlock>
                I was brutally ran over by a car and my seat post is broken. I
                broke five ribs and had a collapsed lung, lacerated liver broken
                arm and many other injuries because the person that hit me tried
                to flee the scene, but I was wedged underneath and was stuch as
                she drove over forward, then backwards and dragged me down the
                street. But the doctor said that it is a miracle that I
                survived. When the car finally stopped, the drivers side wheel
                was completely on to of my chest. There were people around and
                they made a circle around the car and I heard someone count to
                three and they lifted the car off me by hand! This is all true.
                My S1 shielded my body the first time I was ran over. I love
                that bike and it too is one of the reasons I am still alive. I
                will never part with this bike!
              </TextBlock>

              <TextBlock>
                Thank you for making such an awesome bike. I'm happy to share my
                story to anyone to raise awareness to drivers who don't pay
                attention and who don't stop after they hit someone. My life is
                not the same...but I am determined to get it back!
              </TextBlock>
            </Text>
          </View>
          <View
            padding="none"
            border="none"
            overflow="hidden"
            inlineAlignment="end"
            minInlineSize="100%"
          >
            <Link onPress={() => onPress(4)}>Read more</Link>
          </View>
          <Text emphasis="bold" size="medium">
            -Donnie Beasley
          </Text>
          <Image source="https://cdn.shopify.com/s/files/1/0583/5810/4213/files/24429.svg?v=1732247597&width=200" />
        </BlockLayout>
      </InlineLayout>
    </ScrollView>
  );
}
