package ss.nscube.webshare.ui.adapters;

import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.viewpager.widget.PagerAdapter;

import java.util.ArrayList;

import ss.nscube.webshare.MainActivity;
import ss.nscube.webshare.ui.views.MyFilesView;
import ss.nscube.webshare.ui.views.UploadsView;

public class ShareViewPagerAdapter extends PagerAdapter {
    private MainActivity activity;
    private UploadsView uploadsView;
    private MyFilesView myFilesView;

    public ShareViewPagerAdapter(MainActivity activity) {
        super();
        this.activity = activity;
        uploadsView = new UploadsView(activity);
        myFilesView = new MyFilesView(activity);
    }

    public void onResult(ArrayList<String> paths) {
        if (paths != null) {
            myFilesView.onResult(paths);
        }
    }

    @Nullable
    @Override
    public CharSequence getPageTitle(int position) {
        if (position == 0) {
            return "UPLOADS";
        } if (position == 1) {
            return "MY FILES";
        }
        return "";
    }

    @NonNull
    @Override
    public Object instantiateItem(@NonNull ViewGroup container, int position) {
//        if (position == 0) {
//            container.addView(settingsView);
//            return settingsView;
//        } else
        if (position == 0) {
            container.addView(uploadsView);
            return uploadsView;
        } else {
            container.addView(myFilesView);
            return myFilesView;
        }
    }

    @Override
    public void destroyItem(@NonNull ViewGroup container, int position, @NonNull Object object) {
        container.removeView((View)object);
    }

    public void onDestroy() {
        myFilesView.onDestroy();
    }

    @Override
    public int getCount() {
        return 2;
    }

    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object object) {
        return view == object;
    }
}
