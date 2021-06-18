package com.nscube.filepicker;

import com.nscube.filepicker.data.FileInfo;
import com.nscube.filepicker.utils.FileUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * maps the selected paths to the parent folder
 * Ex. let selected paths be
 *      1. /downloads/file1
 *      2. /downloads/file2
 *      3. /downloads/file3
 *      4. /music/file1
 *
 * then map is
 *      1. /downloads/
 *          1a. /downloads/file1
 *          1b. /downloads/file2
 *          1c. /downloads/file3
 *      2. /music/
 *          2a. /music/file1
 */
public class FileSelector {
    private HashMap<String, ArrayList<String>> selectedFilesMap;

    public FileSelector() {
        selectedFilesMap = new HashMap<>();
    }

    private ArrayList<String> getArrayListOf(String parent) {
        if (!selectedFilesMap.containsKey(parent)) {
            ArrayList<String> paths = new ArrayList<>();
            selectedFilesMap.put(parent, paths);
            return paths;
        }
        return selectedFilesMap.get(parent);
    }

    public void add(String path) {
        String parent = FileUtil.getParentPath(path);
        ArrayList<String> paths = getArrayListOf(parent);
        if (paths != null && !paths.contains(path)) {
            paths.add(path);
        }
    }

    public void remove(String path) {
        String parent = FileUtil.getParentPath(path);
        ArrayList<String> paths = getArrayListOf(parent);
        if (paths != null) {
            paths.remove(path);
        }
    }

    public void selectFileInfos(String parentPath, FileInfo[] fileInfos) {
        ArrayList<String> paths = selectedFilesMap.get(parentPath);
        if (paths != null) {
            for (FileInfo fileInfo: fileInfos) {
                for (String path: paths) {
                    if (fileInfo.getPath().equals(path)) {
                        fileInfo.setSelected(true);
                        break;
                    }
                }
            }
        }
    }

    /**
     * adds all values of the map to ArrayList
     *
     * @return the array list
     */
    public ArrayList<String> toArrayList() {
        ArrayList<String> arrayList = new ArrayList<>();
        for (Map.Entry<String, ArrayList<String>> entry: selectedFilesMap.entrySet())
            arrayList.addAll(entry.getValue());
        return arrayList;
    }
}
