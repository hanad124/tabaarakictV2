export type THostingPackages = {
  id: number;
  type: "standard" | "premium" | "business";
  iconBackgroundColor: string;
  money: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  features: string[];
  isRecommended: boolean;
  sslCertificate: boolean;
};
