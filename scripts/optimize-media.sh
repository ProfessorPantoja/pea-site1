#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PHOTOS_DIR="$ROOT_DIR/public/fotos"
VIDEOS_DIR="$ROOT_DIR/public/video"

require_tool() {
    if ! command -v "$1" >/dev/null 2>&1; then
        echo "Erro: '$1' nao esta instalado." >&2
        exit 1
    fi
}

optimize_image() {
    local input="$1"
    local output="$2"

    ffmpeg -y -loglevel error -i "$input" \
        -c:v libwebp \
        -q:v 72 \
        -compression_level 6 \
        "$output"
}

optimize_video() {
    local input="$1"
    local output="$2"

    ffmpeg -y -loglevel error -i "$input" \
        -map 0:v:0 \
        -map 0:a:0? \
        -c:v libx264 \
        -preset slow \
        -crf 31 \
        -c:a aac \
        -b:a 96k \
        -ac 2 \
        -movflags +faststart \
        -pix_fmt yuv420p \
        "$output"
}

optimize_video_light() {
    local input="$1"
    local output="$2"

    ffmpeg -y -loglevel error -i "$input" \
        -map 0:v:0 \
        -map 0:a:0? \
        -vf "scale=480:-2,fps=24" \
        -c:v libx264 \
        -preset slow \
        -crf 37 \
        -c:a aac \
        -b:a 64k \
        -ac 2 \
        -movflags +faststart \
        -pix_fmt yuv420p \
        "$output"
}

optimize_project_images() {
    local files=()
    mapfile -d '' files < <(
        find "$PHOTOS_DIR" -maxdepth 1 -type f \
            \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) \
            ! -iname '*.webp' \
            -print0
    )

    for input in "${files[@]}"; do
        local output="${input%.*}.webp"
        optimize_image "$input" "$output"
    done
}

optimize_project_videos() {
    local files=()
    mapfile -d '' files < <(
        find "$VIDEOS_DIR" -maxdepth 1 -type f -iname '*.mp4' ! -iname '*-optimized.mp4' -print0
    )

    for input in "${files[@]}"; do
        local output="${input%.*}-optimized.mp4"
        local basename
        basename="$(basename "$input")"

        if [[ "$basename" == "3.mp4" ]]; then
            optimize_video_light "$input" "$output"
        else
            optimize_video "$input" "$output"
        fi
    done
}

require_tool ffmpeg

optimize_project_images
optimize_project_videos

echo "Midias otimizadas:"
find "$PHOTOS_DIR" -maxdepth 1 -type f -iname '*.webp' -print0 | xargs -0 stat -c '%n %s bytes'
find "$VIDEOS_DIR" -maxdepth 1 -type f -iname '*-optimized.mp4' -print0 | xargs -0 stat -c '%n %s bytes'
