package ss.nscube.webshare.ui.adapters;

//public class ViewPagerAdapter extends PagerAdapter {
//    private MainActivity activity;
//    private SettingsView settingsView;
//
//
//    public ViewPagerAdapter(MainActivity activity) {
//        super();
//        this.activity = activity;
////        settingsView = new SettingsView(activity);
//    }
//
//    public void onResult(ArrayList<String> paths) {
//        if (paths != null) {
//        }
//    }
//
//    @Nullable
//    @Override
//    public CharSequence getPageTitle(int position) {
////        if (position == 0) {
////            return "SETTINGS";
////        }
//        if (position == 0) {
//            return "SERVER";
//        } if (position == 1) {
//            return "SHARE";
//        }
//        return "";
//    }
//
//    @NonNull
//    @Override
//    public Object instantiateItem(@NonNull ViewGroup container, int position) {
////        if (position == 0) {
////            container.addView(settingsView);
////            return settingsView;
////        } else
//            if (position == 0) {
//            container.addView(serverView);
//            return serverView;
//        } else {
//            container.addView(shareView);
//            return shareView;
//        }
//    }
//
//    @Override
//    public void destroyItem(@NonNull ViewGroup container, int position, @NonNull Object object) {
//        container.removeView((View)object);
//    }
//
//    public void onDestroy() {
//        shareView.onDestroy();
//    }
//
//    @Override
//    public int getCount() {
//        return 2;
//    }
//
//    @Override
//    public boolean isViewFromObject(@NonNull View view, @NonNull Object object) {
//        return view == object;
//    }
//}
