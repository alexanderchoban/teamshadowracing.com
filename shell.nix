{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # Specify the packages you want in your environment
  buildInputs = with pkgs; [
    nodejs_22       # Grabs the latest Node.js 22 LTS
    corepack        # Enables pnpm and yarn without global npm installs
    # git           # Uncomment if you need git available in the shell
  ];

  # Environment variables and shell hooks
  shellHook = ''
    # Add local node_modules bin to PATH so you can run local CLI tools directly
    export PATH="$PWD/node_modules/.bin:$PATH"

    # Echo a nice welcome message
    echo "⚡ Node.js development environment loaded! ⚡"
    node --version
    npm --version
  '';
}
