export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string| undefined;
  }

  export interface ClassType {
    id: string,
    name: string,
    description?: string,
    image: string
  }