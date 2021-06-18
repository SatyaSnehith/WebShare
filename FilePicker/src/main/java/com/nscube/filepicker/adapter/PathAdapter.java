package com.nscube.filepicker.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.nscube.filepicker.R;
import com.nscube.filepicker.adapter.events.PathClickListener;
import com.nscube.filepicker.utils.FileUtil;

import java.util.ArrayList;

public class PathAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {
    private static final int TYPE_HOME = 0;
    private static final int TYPE_ARROW = 1;
    private static final int TYPE_PATH = 2;
    private ArrayList<String> directories;
    private PathClickListener pathClickListener;

    public PathAdapter(ArrayList<String> directories) {
        this.directories = directories;
    }

    public void setPathClickListener(PathClickListener pathClickListener) {
        this.pathClickListener = pathClickListener;
    }

    public void updateArray(ArrayList<String> directories) {
        this.directories = directories;
    }

    @Override
    public int getItemViewType(int position) {
        if (position == 0) {
            return TYPE_HOME;
        } else if (position % 2 == 1) {
            return TYPE_ARROW;
        } else {
            return TYPE_PATH;
        }
    }

    @NonNull
    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        switch (viewType) {
            case 0:
                return new HomeViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.image_item, parent, false));
            case 1:
                return new ArrowViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.image_item, parent, false));
        }
        return new PathViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.path_item, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
        switch (holder.getItemViewType()) {
            case 0:
                HomeViewHolder homeViewHolder = (HomeViewHolder) holder;
                homeViewHolder.imageView.setImageResource(R.drawable.home_icon);
                homeViewHolder.imageView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        pathClickListener.onPathClicked(0);
                    }
                });
                break;
            case 1:
                ArrowViewHolder arrowViewHolder = (ArrowViewHolder) holder;
                arrowViewHolder.imageView.setImageResource(R.drawable.arrow_right_icon);
                break;
            case 2:
                PathViewHolder pathViewHolder = (PathViewHolder) holder;
                pathViewHolder.textView.setText(FileUtil.getFileNameFromPath(directories.get((position / 2) - 1)));
                pathViewHolder.textView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        pathClickListener.onPathClicked(position / 2);
                    }
                });
                break;
        }
    }

    public void firePathClick(int index) {
        pathClickListener.onPathClicked(index);
    }

    @Override
    public int getItemCount() {
        return (directories.size() * 2) + 1;
    }

    public static class HomeViewHolder extends RecyclerView.ViewHolder {
        ImageView imageView;

        public HomeViewHolder(@NonNull View itemView) {
            super(itemView);
            imageView = (ImageView) itemView;
        }
    }

    public static class ArrowViewHolder extends RecyclerView.ViewHolder {
        ImageView imageView;

        public ArrowViewHolder(@NonNull View itemView) {
            super(itemView);
            imageView = (ImageView) itemView;
        }
    }

    public static class PathViewHolder extends RecyclerView.ViewHolder {
        TextView textView;

        public PathViewHolder(@NonNull View itemView) {
            super(itemView);
            textView = (TextView) itemView;
        }
    }

}
