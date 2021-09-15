export type BannerEntityType = {
  id: number;
  link: {
    desktop: string;
    mobile: string;
  };
};

export type BannerListType = BannerEntityType[];
