package ss.nscube.webshare.ui.adapters;

import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

import ss.nscube.webshare.MainActivity;
import ss.nscube.webshare.server.loaders.FileData;
import ss.nscube.webshare.ui.views.LoaderView;

public class ProgressAdapter extends RecyclerView.Adapter<ProgressAdapter.FileViewHolder> {
    private final ArrayList<FileData> fileData;
    private int lastPosition = -1;
    private final MainActivity activity;

    public ProgressAdapter(MainActivity activity, ArrayList<FileData> fileData) {
        this.activity = activity;
        this.fileData = fileData;
    }

    @NonNull
    @Override
    public FileViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new FileViewHolder(new LoaderView(activity));
    }

    @Override
    public void onBindViewHolder(@NonNull FileViewHolder holder, int position) {
        FileData fileData = this.fileData.get(position);
        holder.mainView.setFileData(fileData);

        setAnimation(holder.itemView, position);
    }

    private void setAnimation(View view, int position) {
        if (position > lastPosition) {
            Animation animation = AnimationUtils.loadAnimation(view.getContext(), android.R.anim.fade_in);
            view.startAnimation(animation);
            lastPosition = position;
        }
    }

    @Override
    public int getItemCount() {
        return fileData.size();
    }

    static class FileViewHolder extends RecyclerView.ViewHolder {
        LoaderView mainView;

        public FileViewHolder(@NonNull LoaderView itemView) {
            super(itemView);
            mainView = itemView;
        }
    }


}
