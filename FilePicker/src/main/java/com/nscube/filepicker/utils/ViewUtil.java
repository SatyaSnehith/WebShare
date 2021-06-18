package com.nscube.filepicker.utils;

import android.content.Context;

public class ViewUtil {
    private static float density = 1;

    public static void init(Context context) {
        density = context.getResources().getDisplayMetrics().density;
    }

    public static int dp(int dp) {
        return (int) (density * dp);
    }
}