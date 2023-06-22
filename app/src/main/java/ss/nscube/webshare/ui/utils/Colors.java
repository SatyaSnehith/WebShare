package ss.nscube.webshare.ui.utils;

import android.graphics.Color;

import androidx.annotation.ColorInt;

import org.jetbrains.annotations.NotNull;

public class Colors {
    @ColorInt public static final int PRIMARY = 0xFF64A1BD;

    //BG
    @ColorInt public static final int LIGHT = 0xFFFFFFFF;
    @ColorInt public static final int DARK = 0xFF121212;

    //TEXT
    @ColorInt public static final int LIGHT_TEXT_DESCRIPTION = 0xFF666666;
    @ColorInt public static final int DARK_TEXT_DESCRIPTION = 0xFFAAAAAA;


    public static int getTextColor() {
        if (ThemeUtil.INSTANCE.isLightTheme()) return Color.BLACK;
        else return Color.WHITE;
    }

    public static int getTextDescriptionColor() {
        if (ThemeUtil.INSTANCE.isLightTheme()) return LIGHT_TEXT_DESCRIPTION;
        else return DARK_TEXT_DESCRIPTION;
    }

    public static int getBackgroundColor() {
        if (ThemeUtil.INSTANCE.isLightTheme()) return LIGHT;
        else return DARK;
    }

    public static int getSecondaryBackgroundColor() {
        if (ThemeUtil.INSTANCE.isLightTheme()) return MatColors.GREY_200;
        else return MatColors.GREY_800;
    }

    //TEXT
//    @ColorInt public static final int LIGHT = 0xFFFFFFFF;
//    @ColorInt public static final int LIGHT = 0xFFFFFFFF;
//    @ColorInt public static final int LIGHT = 0xFFFFFFFF;
//    @ColorInt public static final int LIGHT = 0xFFFFFFFF;

}