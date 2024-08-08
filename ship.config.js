export default {
  installCommand: () => 'bun i',
  buildCommand: () => null,
  publishCommand: ({ tag }) =>
    `echo "Releasing ${tag} version of Canvas Nuxt Boilerplate App"`,
};
