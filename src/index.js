//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * rfid's methods
   */
  rfid = {
    /**
     * List rfid devices
     *
     * @param {ListRfidsRequest} req listRfids request
     * @returns {Promise<ListRfidsResponse>} A paged array of rfid devices
     */
    listRfids: req => {
      const { query } = req || {};

      return fetch(`${this.base}/rfids`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a rfid
     *
     * @param {CreateRfidRequest} req createRfid request
     * @returns {Promise<CreateRfidResponse>} The rfid created
     */
    createRfid: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createRfid");

      return fetch(`${this.base}/rfids`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find rfid device by index
     *
     * @param {GetRfidRequest} req getRfid request
     * @returns {Promise<GetRfidResponse>} Expected response to a valid request
     */
    getRfid: req => {
      const { rfidIndex } = req || {};

      if (!rfidIndex) throw new Error("rfidIndex is required for getRfid");

      return fetch(`${this.base}/rfids/${rfidIndex}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update rfid device
     *
     * @param {UpdateRfidRequest} req updateRfid request
     * @returns {Promise<UpdateRfidResponse>} The rfid
     */
    updateRfid: req => {
      const { rfidIndex, body } = req || {};

      if (!rfidIndex) throw new Error("rfidIndex is required for updateRfid");
      if (!body) throw new Error("requetBody is required for updateRfid");

      return fetch(`${this.base}/rfids/${rfidIndex}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete rfid device
     *
     * @param {DeleteRfidRequest} req deleteRfid request
     */
    deleteRfid: req => {
      const { rfidIndex } = req || {};

      if (!rfidIndex) throw new Error("rfidIndex is required for deleteRfid");

      return fetch(`${this.base}/rfids/${rfidIndex}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * camera's methods
   */
  camera = {
    /**
     * List cameras
     *
     * @param {ListCamerasRequest} req listCameras request
     * @returns {Promise<ListCamerasResponse>} A paged array of cameras
     */
    listCameras: req => {
      const { query } = req || {};

      return fetch(`${this.base}/cameras`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a camera
     *
     * @param {CreateCameraRequest} req createCamera request
     * @returns {Promise<CreateCameraResponse>} The camera created
     */
    createCamera: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createCamera");

      return fetch(`${this.base}/cameras`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find camera by index
     *
     * @param {GetCameraRequest} req getCamera request
     * @returns {Promise<GetCameraResponse>} Expected response to a valid request
     */
    getCamera: req => {
      const { cameraIndex } = req || {};

      if (!cameraIndex)
        throw new Error("cameraIndex is required for getCamera");

      return fetch(`${this.base}/cameras/${cameraIndex}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update camera
     *
     * @param {UpdateCameraRequest} req updateCamera request
     * @returns {Promise<UpdateCameraResponse>} The camera
     */
    updateCamera: req => {
      const { cameraIndex, body } = req || {};

      if (!cameraIndex)
        throw new Error("cameraIndex is required for updateCamera");
      if (!body) throw new Error("requetBody is required for updateCamera");

      return fetch(`${this.base}/cameras/${cameraIndex}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete camera
     *
     * @param {DeleteCameraRequest} req deleteCamera request
     */
    deleteCamera: req => {
      const { cameraIndex } = req || {};

      if (!cameraIndex)
        throw new Error("cameraIndex is required for deleteCamera");

      return fetch(`${this.base}/cameras/${cameraIndex}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * door's methods
   */
  door = {
    /**
     * List doors
     *
     * @param {ListDoorsRequest} req listDoors request
     * @returns {Promise<ListDoorsResponse>} A paged array of doors
     */
    listDoors: req => {
      const { query } = req || {};

      return fetch(`${this.base}/doors`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * target's methods
   */
  target = {
    /**
     * List targets
     *
     * @param {ListTargetsRequest} req listTargets request
     * @returns {Promise<ListTargetsResponse>} A paged array of targets
     */
    listTargets: req => {
      const { query } = req || {};

      return fetch(`${this.base}/targets`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * aics's methods
   */
  aics = {
    /**
     * post an event from aics
     *
     * @param {PostEventRequest} req postEvent request
     */
    postEvent: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for postEvent");

      return fetch(`${this.base}/aics/events`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
}
