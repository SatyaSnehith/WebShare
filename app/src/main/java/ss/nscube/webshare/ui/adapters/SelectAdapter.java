package ss.nscube.webshare.ui.adapters;

import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.nscube.filepicker.data.FileInfo;
import com.nscube.filepicker.utils.FileUtil;

import java.io.File;
import java.util.ArrayList;

import ss.nscube.webshare.ui.views.SelectedFileView;
import ss.nscube.webshare.ui.adapters.events.OnRemoveClicked;

public class SelectAdapter extends RecyclerView.Adapter<SelectAdapter.FileViewHolder> {
    private final ArrayList<FileInfo> fileInfos;
    private int lastPosition = -1;
    private OnRemoveClicked onRemoveClicked;

    public SelectAdapter() {
        this.fileInfos = new ArrayList<>();
    }

    public void setOnRemoveClicked(OnRemoveClicked onRemoveClicked) {
        this.onRemoveClicked = onRemoveClicked;
    }

    public void update(ArrayList<String> paths) {
        int length = paths.size();
        ArrayList<FileInfo> fileInfos = new ArrayList<>();
        for (int i = 0; i < length; ++i) {
            File file = new File(paths.get(i));
            if (file.exists()) {
                FileInfo fileInfo;
                if (!file.isHidden()) {
                    if (file.isFile()) {
                        fileInfo = new FileInfo(file.getName(), file.getAbsolutePath(), FileUtil.getSize(file.length()));
                    } else {
                        fileInfo = new FileInfo(file.getName(), file.getAbsolutePath());
                    }
                    fileInfos.add(fileInfo);
                }
            }
        }
        this.fileInfos.clear();
        this.fileInfos.addAll(fileInfos);
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public FileViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new FileViewHolder(new SelectedFileView(parent.getContext()));
    }

    @Override
    public void onBindViewHolder(@NonNull FileViewHolder holder, int position) {
        FileInfo fileInfo = fileInfos.get(position);

        holder.mainView.setFileInfo(fileInfo);

        holder.mainView.setDeleteClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    fileInfos.remove(position);
                    notifyItemRemoved(position);
                    notifyItemRangeChanged(position, fileInfos.size());
                    if (onRemoveClicked != null)
                        onRemoveClicked.onRemoveClicked(position);
                } catch (IndexOutOfBoundsException e) {
                    e.printStackTrace();
                }
            }
        });

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
        return fileInfos.size();
    }

    static class FileViewHolder extends RecyclerView.ViewHolder {
        SelectedFileView mainView;

        public FileViewHolder(@NonNull SelectedFileView itemView) {
            super(itemView);
            mainView = itemView;
        }
    }
}
