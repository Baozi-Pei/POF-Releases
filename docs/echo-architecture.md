# Current website model description

POF is the product identity. ECHO (Elevation-Conditioned Hierarchical Optics) is the current segmentation core. Recognition remains a planned extension.

- Input: normalized first optical band; MiT-B5 produces four hierarchical feature maps.
- Decoder: U-shaped convolutional decoder with encoder skip connections and a shallow image stem.
- Optional measured DEM: a centred footprint with four times the optical side length, read at 192 × 192. Relative height, two slope components and validity condition the deepest two encoder stages. This is spatial context, not generated or super-resolved terrain.
- No DEM: optical-only segmentation. A model without a trained DEM branch cannot acquire one merely by supplying a DEM. Invalid selected DEM inputs are reported explicitly.
- Scale calibration: training samples native-image context windows using target geometry and available coverage. Held-out confirmed pixels compare supported single-scale and pyramid recipes; selected windows and weights travel with the checkpoint. Insufficient evidence produces a recorded single-scale fallback.
- Inference: overlapping Hann-weighted window blending, followed by scale-logit fusion before thresholding. Scale calibration is a bounded contextual comparison, not a full-scene guarantee or unrestricted scale adaptation.
- Model exchange: ECHO segmentation checkpoints and ECHO deployment ZIPs; old POF weights are incompatible. Source images and labels remain usable.

Checked against the local application's `pof/echo/model.py`, `pof/echo/io.py`, `pof/segmentation/adaptive_views.py`, `echo_pyramid.py` and `echo_backend.py` on 2026-11-16. These files are not published in this release-only repository.

The Mars hero, navigation, tutorials, download routes and update feed retain their existing contracts. Existing recordings remain labelled as demonstrations; they are not presented as evidence of current ECHO accuracy or terrain generation. Both online manuals and their PDF downloads use the updated model description.
