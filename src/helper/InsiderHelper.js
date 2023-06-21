import React from "react";
import RNInsider from 'react-native-insider';
import InsiderCallbackType from 'react-native-insider/src/InsiderCallbackType';
import NavigationService from "../NavigationService";
import PromotionHelper from "./promotionHelper";
import PopupBanner from "../UI/PopupBanner";
import UI from "../UI";

const banner_birthday = require('../img/Banner/banner_birthday.png')

const InsiderHelper = {
  initInsider: () => {
    // UI.showChildren(<PopupBanner
    //   title={"Birthday month"}
    //   content={"Med247 offers customers a 100% discount on examination fees with specialists (Applied to Pediatrics, Internal Medicine, Otolaryngology, Nutrition)"}
    //   btnLeftText={"See more"}
    //   btnLeftAction={() => NavigationService.navigate('ListPromotion', { detailCode: 'XXXXXX' })}
    //   btnRightAction={() => {
    //     NavigationService.popToTop()
    //     setTimeout(() => {
    //       PromotionHelper.bookingWithPromotion('', 'XXXXXX')
    //     }, 100)
    //   }}
    //   btnRightText={"Booking"}
    //   banner={banner_birthday}
    //   isClose
    // />)
    console.log("Insider initialized");
    RNInsider.init(
      "med247uat",
      "group.com.med247.chime",
      (type, data) => {
        switch (type) {
          case InsiderCallbackType.NOTIFICATION_OPEN:
            console.log("[INSIDER][NOTIFICATION_OPEN]: ", data);
            if (data?.data?.key === 'voucher_birthday') {
              UI.showChildren(<PopupBanner
                title={"Birthday month"}
                content={"Med247 offers customers a 100% discount on examination fees with specialists (Applied to Pediatrics, Internal Medicine, Otolaryngology, Nutrition)"}
                btnLeftText={"See more"}
                btnLeftAction={() => NavigationService.navigate('ListPromotion', { detailCode: data?.data?.code })}
                btnRightAction={() => {
                  NavigationService.popToTop()
                  setTimeout(() => {
                    PromotionHelper.bookingWithPromotion('', data?.data?.code)
                  }, 100)
                }}
                btnRightText={"Booking"}
                banner={banner_birthday}
                isClose
              />)
            }
            break;
          case InsiderCallbackType.INAPP_BUTTON_CLICK:
            console.log('[INSIDER][INAPP_BUTTON_CLICK]: ', data);
            break;
          case InsiderCallbackType.TEMP_STORE_PURCHASE:
            console.log('[INSIDER][TEMP_STORE_PURCHASE]: ', data);
            break;
          case InsiderCallbackType.TEMP_STORE_ADDED_TO_CART:
            console.log('[INSIDER][TEMP_STORE_ADDED_TO_CART]: ', data);
            break;
          case InsiderCallbackType.TEMP_STORE_CUSTOM_ACTION:
            console.log('[INSIDER][TEMP_STORE_CUSTOM_ACTION]: ', data);
            break;
        }
      }
    );

    RNInsider.registerWithQuietPermission(false);

    console.log("Insider initialized Success");
  }
}

export default InsiderHelper