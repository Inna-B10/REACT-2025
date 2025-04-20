import style from "./ArticleCard.module.css";

/**
 * The Shape of the Article we get back
 * from the API we are using
 *
 * @link [JSDOC - Typedef](https://jsdoc.app/tags-typedef)
 * @link [API](https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger/)
 *
 * @typedef {{
 * "slug": string
 * "title": string,
 * "description": string,
 * "body": string,
 * "tagList": string[],
 * "createdAt": string,
 * "updatedAt": string,
 * "favorited": boolean,
 * "favoritesCount": number,
 * "author": {
 *   "username": string,
 *   "bio": string | null,
 *   "image": string,
 *   "following": boolean
 * }
 * }} Article
 */

/**
 *
 * @param {{
 * article: Article
 * }} props
 */
export function ArticleCard(props) {
  const content = props.article.body.split("\\n").join(" ");

  return (
    <article className={style["container"]}>
      <header>{props.article.title}</header>
      <p>{content}</p>
    </article>
  );
}
