import { ActionPanel, Action, Icon, List, Color } from "@raycast/api";

const TEST_CARDS = [
  {
    subtitle: "Visa success",
    title: "4242 4242 4242 4242",
    value: "4242424242424242",
    keywords: ["visa", "success"],
    icon: { source: Icon.CreditCard, tintColor: Color.Green },
  },
  {
    subtitle: "Mastercard success",
    title: "5555 5555 5555 4444",
    value: "5555555555554444",
    keywords: ["mastercard", "success"],
    icon: { source: Icon.CreditCard, tintColor: Color.Green },
  },
  {
    subtitle: "Authenticate unless setup",
    title: "4000 0025 0000 3155",
    value: "4000002500003155",
    keywords: ["authenticate", "success", "3ds"],
    icon: { source: Icon.CreditCard, tintColor: Color.Green },
  },
  {
    subtitle: "Generic Decline",
    title: "4000 0000 0000 0002",
    value: "4000000000000002",
    keywords: ["generic", "decline"],
    icon: { source: Icon.CreditCard, tintColor: Color.Red },
  },
  {
    subtitle: "Insufficient funds decline",
    title: "4000 0000 0000 0010",
    value: "4000000000009995",
    keywords: ["insufficient", "funds", "decline"],
    icon: { source: Icon.CreditCard, tintColor: Color.Red },
  },
  {
    subtitle: "Expired decline",
    title: "4000 0000 0000 0069",
    value: "4000000000000069",
    keywords: ["expired", "decline"],
    icon: { source: Icon.CreditCard, tintColor: Color.Red },
  },
  {
    subtitle: "Decline after attaching",
    title: "4000 0000 0000 0341",
    value: "4000000000000341",
    keywords: ["decline", "after", "attaching"],
    icon: { source: Icon.CreditCard, tintColor: Color.Red },
  },
];

export default function Command() {
  return (
    <List>
      {TEST_CARDS.map((item, index) => (
        <List.Item
          key={index}
          icon={item.icon}
          title={item.title}
          keywords={item.keywords}
          subtitle={item.subtitle}
          accessories={[{ icon: Icon.CopyClipboard }]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={item.title} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
