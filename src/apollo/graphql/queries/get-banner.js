import { gql } from '@apollo/client';

export const GET_BANNER = gql`
  query GetBanner {
    activeLandingPageBanner {
      id
      name
      isDefault
      startsAt
      endsAt
      headline
      description
      logoImageUrl
      logoImageWidth
      hasButton
      buttonText
      buttonUrl
      desktopImageUrl
      isDesktopImageHidden
      desktopBackgroundImagePosition
      mobileImageUrl
      isMobileImageHidden
      mobileBackgroundImagePosition
      isActive
      desktopContentBoxWidth
      desktopContentBoxPosition
      desktopContentAlignment
      desktopSpaceAboveContent
      desktopSpaceAboveContentUnit
      desktopSpaceBelowContent
      desktopSpaceBelowContentUnit
      mobileContentBoxPosition
      mobileContentAlignment
      mobileSpaceAboveContent
      mobileSpaceAboveContentUnit
      mobileSpaceBelowContent
      mobileSpaceBelowContentUnit
      outletIds
      storefrontId
      createdAt
      updatedAt
    }
  }
`;