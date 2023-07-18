
build: tailwind-build
    cd client-leptos && cargo leptos build --release \
    cd src-tauri && cargo tauri build

# cargo runcc 
dev: tailwind-dev
    cd client-leptos && cargo leptos watch \
    cd src-tauri && cargo tauri dev

# Tailwind / npm ##############################################################

tailwind-dev:
    # Affected by https://github.com/tailwindlabs/tailwindcss/issues/9870
    # / https://github.com/tailwindlabs/tailwindcss/issues/8517
    npx tailwindcss \
        -c ./client-leptos/tailwind.config.js \
        -i ./client-leptos/style/input.css \
        -o ./client-leptos/style/output.css \
        --watch

tailwind-build:
    # Affected by https://github.com/tailwindlabs/tailwindcss/issues/9870
    # / https://github.com/tailwindlabs/tailwindcss/issues/8517
    npx tailwindcss \
        -c ./client-leptos/tailwind.config.js \
        -i ./client-leptos/style/input.css \
        -o ./client-leptos/style/output.css \
        --minify

# END Tailwind / npm ##########################################################