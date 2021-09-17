// import { BannerEntityType, BannerListType } from './contracts/types';

// const getIndexOf = (
//   stateBanner: BannerListType,
//   activeBanner: BannerEntityType
// ): number => {
//   const index = stateBanner.indexOf(activeBanner);
//   if (index === -1) {
//     return 0;
//   }
//   return index;
// };

// export const TransitionProvider = (stateBanner: BannerListType) => {
//   const activeBanner = stateBanner.find(
//     (item: BannerEntityType) => item.targetClass === 'active'
//   );
//   if (!activeBanner) {
//     stateBanner[0].targetClass = 'active';
//     return [...stateBanner];
//   }
//   const nextIndex = activeBanner
//     ? getIndexOf(stateBanner, activeBanner) + 1
//     : 0;
//   const nextBanner =
//     stateBanner[nextIndex] === undefined
//       ? stateBanner[0]
//       : stateBanner[nextIndex];
//   if (activeBanner && nextBanner) {
//     activeBanner.targetClass = '';
//     nextBanner.targetClass = 'active';
//   }
//   return [...stateBanner];
// };
