export type BannerEntityType = {
  id: number;
  targetClass: 'active' | '';
  link: {
    desktop: string;
    mobile: string;
  };
};

export type BannerListType = BannerEntityType[];
