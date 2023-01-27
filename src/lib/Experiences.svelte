<script lang="ts">
    interface Experience {
        title: string;
        duration: string;
        description: string;
    }

    const experiences: Experience[] = [
        {title: 'Application Development Internship @ IT-School', duration: 'February 2020 - April 2020', description: 'Integration of new functionalities in the web platform allowing establishments schools to go digital. Symfony, HTML5, CSS3, JavaScript, jQuery, Ajax, RESTful & Github'},
        {title: 'Front-End Developer @ Inforius', duration: 'August 2020 - June 2021', description: 'Development of CMS with the aim of digitizing the various services of Belgian communal establishments. Angular, Kotlin & Azure'},
        {title: 'Full Stack Developer @ Underside', duration: 'June 2021 - now()', description: 'Mobile applications & CMS development for different type of sector. Angular, NodeJS, Ionic, Python, Linux & MacOS'},
    ];
</script>

<div class="flex-row experiences">
  {#each experiences as experience}
    <div class="flex-column full-width experience">
      <div class="flex-row title">{experience.title}</div>
      <div class="flex-row duration">{experience.duration}</div>
      <div class="flex-row description">{experience.description}</div>
    </div>
  {/each}
</div>

<style lang="scss">
  @import '@/styles/colors';

  .experiences {
    margin: 10px;
    width: calc(100% - 20px);

    flex-wrap: wrap;
    gap: 20px;

    .experience {
      .title {
        color: $directory-color;
        font-size: 18px;
      }
      .duration {
        color: $orange;
      }
      .description {
        font-size: 14px;
      }
    }
  }
</style>